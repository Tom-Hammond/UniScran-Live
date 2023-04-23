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

  function viewMenu() {
    navigate(`/ViewMenu?id=${restaurantId}`);
  }

    return (
        <div class="main-row">
            <div class="main-column">
              <div class="main-card">
                 <img src={restaurantImage}  alt='Shop-Img' /> 
                 <div class="main-container">
                  <h2>{restaurantName}</h2>
                  <p class="main-title"> {restaurantCuisine}</p>
                  <p> {restaurantDescription} .</p>
                  <p> <button className="main-button" onClick={viewMenu}>View Menu</button> </p>
                </div>
              </div>
            </div> 
            
          </div>
        
 
    );
  };

  
  
  export default ViewRestaurants;