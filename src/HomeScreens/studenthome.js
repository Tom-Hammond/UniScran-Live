import React, { useState, useEffect } from 'react';
import {Link, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {Router} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';
import ViewRestaurants from '../Order/ViewRestaurants';
import ViewMenu from '../Order/ManageOrder';
import ManageDetails from '../ManageAccount.js/ManageDetails';
import OrderHistory from '../ManageAccount.js/OrderHistory';
import { LoginForm } from '../RegisterLogin/LoginForm';


function StudentHome(props) {
  const [restaurants, setRestaurants] = useState([]);
 
  const navigate = useNavigate(); ///Navigate to different user screens 

  const handleLogout = () => {///Navigate to LOGIN screen
    localStorage.clear();
    navigate('/');
  };
  const orderHistory = () => {///Navigate to ORDER HISTORY screen
    navigate(`/OrderHistory`); 
   }
  const manageDetails = () => { ///Navigate to MANAGE DETAILS screen
    navigate(`/ManageDetails`);
  }

  useEffect(() => {///send a request to recieve open shops from db

    const fetchShopOpenShops = async () => {
    try {
     const response = await axios.get(`http://localhost:3001/openrestaurants`);
      setRestaurants(response.data);
    }
      catch (error) {///return error if cannot fetch menu items 
          console.error('Error fetching open shops:', error);
         }
      };
       fetchShopOpenShops();
    }, []);
 
    let viewRestaurants;

      viewRestaurants = (
        <>
     <div className="view-restaurants-screen-container"></div>
        <h3>Wanna order some SCRAN?</h3>
        {restaurants.map((restaurants, index) => (
            <ViewRestaurants
              key={index} 
              restaurant={restaurants}
            />      
          ))}
        </>
      );
  
  return (
    <div>
    <div className="home-screen-container">
        <h1 className="home-Title">UniSCRAN</h1>
        <div className="button-container">
          <button className="button" onClick={''}>
            Home
          </button>
          <button className="button" onClick={orderHistory}>
            Order History
          </button>
          <button className="button" onClick={manageDetails}>
            Edit Details
          </button>
        </div>       
      {viewRestaurants}
      </div>
      <div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
  
}




export default StudentHome;
