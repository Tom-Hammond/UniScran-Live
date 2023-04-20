import React, { useState, useEffect } from 'react';
import {Link, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {Router} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';
import Menus from './ViewMenus';
import { useLocation } from 'react-router-dom';
import ViewBasket from './ViewBasket';

const ManageOrder = ( ) => {
    const [menuItems, setMenuItems] = useState([]);
    const myBasket = useState([]);

    const restaurantId = useLocation().search;
    const id = new URLSearchParams(restaurantId).get('id');

    const navigate = useNavigate();

    function backHome() {
      navigate(`/Home`);
    }

    const viewBasket = () => {
      navigate('/ViewBasket');
      localStorage.setItem("myBasket", myBasket); 
      
    };
 
    useEffect(() => {///send a request to recieve menu items from db table and stores them
        const fetchMenuItems = async () => {
          try {
            const response = await axios.get(`http://localhost:3001/menu?id=${id}`);
            
            setMenuItems(response.data);
          } catch (error) {///return error if cannot fetch menu items 
            console.error('Error fetching menu items:', error);
          }
        };
        fetchMenuItems();

        console.log(menuItems);
      }, []);
  
      
    return (
        <div className="view-menu-items-container">
        <button onClick={backHome}>Back home</button>
        <div><button onClick={viewBasket}>View Basket</button></div>
      
        <h2>Place an order </h2>
          {menuItems.map((item, index) => (
            <Menus
              key={index} 
              item={item}
              myBasket={myBasket}
            />
          ))}
        </div>     
    );
  };
  
  export default ManageOrder;
  