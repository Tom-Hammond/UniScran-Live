import React, { useState } from 'react';
import './ManageMenu.css';

const EditItemForm = ({ item, updateMenuItem, deleteMenuItem }) => {
  const [name, setName] = useState(item.item_name);
  const [price, setPrice] = useState(item.item_price);
  const [description, setDescription] = useState(item.description);
  const [image, setImage] = useState(item.image);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedItem = {
      ...item,
      name,
      price: parseFloat(price),
      description,
      image,
    };

    updateMenuItem(item.id, updatedItem);
  };

  return (
    
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </td>
          <td>
            <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} />
          </td>
          <td>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
          </td>
          <td>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
          </td>
          <td>
            <button type="submit" className="save-button" onClick={handleSubmit}>
              Save
            </button>
            <button type="button" className="remove-button" onClick={() => deleteMenuItem(item.id)}>
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default EditItemForm;
