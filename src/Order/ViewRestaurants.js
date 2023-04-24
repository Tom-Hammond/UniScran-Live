import React, { useState, useEffect } from 'react';
import {Link, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {Router} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';
import ViewMenu from './ManageOrder';
import './ViewRestaurants.css';


const ViewRestaurants = ({ restaurant }) => {
  const [restaurantId] = useState(restaurant.id);
  const restaurantName = useState(restaurant.name);
  const restaurantCuisine = useState(restaurant.cuisine);
  const restaurantDescription = useState(restaurant.restaurant_description);
  const [restaurantImage] = useState(restaurant.restaurant_image);

  const navigate = useNavigate();

  const handleLogout = () => {///Navigate to LOGIN screen
    localStorage.clear();
    navigate('/');
  };
  
  function viewMenu() {
    navigate(`/ViewMenu?id=${restaurantId}`);
  }

    return (
      
        <div className="main-row">
            <div className="main-column">
              <div className="main-card">
                 <img style={{ width: 180, height: 180, paddingTop: 20 }} src={restaurantImage}  alt='Shop-Img' /> 
                 <div className="main-container">
                  <h2 tyle={{ fontSize: 20}}>{restaurantName}</h2>
                  <p style={{ color: (83, 83, 83), fontSize: 20}}> {restaurantCuisine}</p>
                  <p> {restaurantDescription} .</p>
                  <p> <button className="main-button" onClick={viewMenu}>View Menu</button> </p>
                </div>
                <div>
              </div>
            </div> 
            </div>
            </div>
    

          
                       
            
          
        
 
    );
  };

  
  
  export default ViewRestaurants;