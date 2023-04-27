import React, { useState, useEffect } from 'react';
impoimport React, { useState, useEffect } from 'react';
import {Link, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {Router} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';
import Menus from './ViewMenus';
import { useLocation } from 'react-router-dom';
import ViewBasket from './ViewBasket';
import ViewMenus from './ViewMenus';
import './Order.css';


const ManageOrder = ( ) => {
    const [menuItems, setMenuItems] = useState([]);
    const [myBasket, setMyBasket] = useState([]);
    const [basketTotal, setBasketTotal] = useState(0);
    const [order, setOrder] = useState([]);

    const userId = localStorage.getItem("userId");

    const restaurantId = useLocation().search;
    const id = new URLSearchParams(restaurantId).get('id');

    const navigate = useNavigate();

    function backHome() {
      navigate(`/Home`);
    }

    const viewBasket = () => {
    
      console.log(order);
      
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
      }, []);
      
     
      const checkoutBasket = async () => //send a request to the server to add menu items into the menu db table 
      {
        try {
          const response = await axios.post('http://localhost:3001/order', { userId, id, myBasket });
          if (response != null)
          {
            alert("Order has been sent to the restauarant.");
          }    
            } catch (error) {
          console.error('Error:', error);//return error if cannot add menu items 
          alert('Failed to place order');
        }
      };

      let viewMenus;

      viewMenus = (
        <>
            <div className="view-menu-items-container">
        <button onClick={backHome}>Back home</button> 
        <h2>Place an order </h2>
          {menuItems.map((item, index) => (
            <ViewMenus
              key={index} 
              item={item}
              setMyBasket={setMyBasket}
              basketTotal={basketTotal}
              setBasketTotal={setBasketTotal}
              myBasket={myBasket}
            />
          ))}
        </div>    
       <div>
       <container className="basket-container">
       <h1>Basket</h1>
       {myBasket.map((item, index) => (
            <ViewBasket
              key={index} 
              item={item}
              basketTotal={basketTotal}
              setBasketTotal={setBasketTotal}
            />    
          ))}
          <h2>Order Total:</h2>
          </container>
          <div> 
               <button type="submit" className="save-button" onClick={checkoutBasket}>
            CheckOut
            </button>
            </div>
       </div>     
        </>
      )
    return (
      <div>     
      {
viewMenus 
      } 
  </div>
    );
  };
  
  export default ManageOrder;
  
  
