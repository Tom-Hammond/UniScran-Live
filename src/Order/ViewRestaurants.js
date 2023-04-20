import React, { useState, useEffect } from 'react';
import {Link, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {Router} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';
import ViewMenu from './ManageOrder';
import './Order.css';


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
      <table>
        <thead>
          <tr>
            <th>Restaurant Name</th>
            <th>Cuisine</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {restaurantName}
            </td>
            <td>
               {restaurantCuisine} 
            </td>
            <td>
            {restaurantDescription} 
            </td>
            <td >
            <img src={restaurantImage} className="shop-image"  />         
               </td>
            <td>
              <button type="submit" className="view-menu-button" onClick={viewMenu}>
                View Menu
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  
  
  export default ViewRestaurants;