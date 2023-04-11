import React, { useState, useEffect } from 'react';
import './ManageMenu.css';
import AddItemForm from './AddItemForm';
import EditItemForm from './EditItemForm';
import axios from 'axios';

const ManageMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {///send a request to recieve menu items from db table and stores them
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/menu?id=${userId}`);
        
        setMenuItems(response.data);
      } catch (error) {///return error if cannot fetch menu items 
        console.error('Error fetching menu items:', error);
      }
    };
    fetchMenuItems();
  }, []);

  const addItem = async (item) => //send a request to the server to add menu items into the menu db table 
  {
    try {
      const response = await axios.post('http://localhost:3001/menu', { ...item, userId  });
      const newItem = response.data.item;
      setMenuItems([...menuItems, newItem]);///Add new item to setmenuitems
    } catch (error) {
      console.error('Error:', error);//return error if cannot add menu items 
      alert('Failed to add menu item');
    }
  };

  const updateMenuItem = async (itemId, updatedMenuItem) => {//send a request to the server to update menu items in the menu db table 
    try {
      const response = await axios.put(`http://localhost:3001/menu/${itemId}`, updatedMenuItem);
      console.log('Update response:', response.data); // Log the response data
      const updatedMenuItems = menuItems.map((item) =>
        item.id === itemId ? updatedMenuItem : item
      );
      setMenuItems(updatedMenuItems);
      alert('Menu item updated successfully');
      console.log(itemId);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to update menu item');
    }
  };
  
  const deleteMenuItem = async (itemId) => {//send a request to the server to update menu items in the menu db table
    try {
      const response = await axios.delete(`http://localhost:3001/menu/${itemId}`);
      console.log('Delete response:', response.data);
      const updatedMenuItems = menuItems.filter((item) => item.id !== itemId);
      setMenuItems(updatedMenuItems);
    } catch (error) {
      console.error('Error:', error.response.data);
      alert('Failed to delete menu item');
    }
  };
  
  return (
    <div className="ManageMenu">
      <div className="menu-items">
        <div className="add-item-form-container">
          <h2>Add Item To Menu </h2>
          <AddItemForm addItem={addItem} />
        </div>
        <div className="edit-item-form-container">
        <h2>Edit Menu </h2>
          {menuItems.map((item, index) => (
            <EditItemForm
              key={index} 
              item={item}
              updateMenuItem={updateMenuItem}
              deleteMenuItem={deleteMenuItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageMenu;
