import React, { useState, useEffect } from 'react';
import {Link, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {Router} from "react-router-dom";
import './Home.css';
import axios from 'axios';
import Wetherspoon from "./Images/SpoonsUni.jpg"
import SparShop from "./Images/sparHull.jpg";
import SparMenu from './SparMenu.js';
import SpoonsMenu from './WetherSpoonsMenu.js';




//var shopOpenTime = fetchShopOpenTimes();
//var shopCloseTime = fetchShopCloseTimes();
function StudentHome(props) {


  // useEffect(() => {///send a request to recieve stoere close time from DB

  //   const fetchShopOpenShops = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:3001/menu?id=${}`);
  //       var time = response.data; 
  //     } catch (error) {///return error if cannot fetch menu items 
  //       console.error('Error fetching open shops:', error);
  //     }
  //   };
  //   fetchShopOpenShops();
  // }, []);


  const handleLogout = () => {
    props.setLoggedIn(false);
  };


 

    
  return (


    <div>
    <div className="home-screen-container">
        <h1 className="home-Title">UniSCRAN</h1>
        <div className="button-container">
          <button className="button" onClick={() => console.log('Track order clicked')}>
            Track Order
          </button>
          <button className="button" onClick={() => console.log('Order history clicked')}>
            Order History
          </button>
          <button className="button" onClick={() => console.log('Edit details clicked')}>
            Edit Details
          </button>
        </div>
        <h3>Wanna order some SCRAN?</h3>
          <div className="row">
            <div className="column">
            <div className="card">
            <img alt="Spoons" width="100%" src={SparShop} />
              <div>
                <h2>Spar On-Campus</h2>
                <p>Small shop that stocks essentials for uni life</p>
                <div>
                <h1>Home page</h1>
                <Link to="/about">About</Link>
               </div>
                <p><button className="button">Menu</button></p>
               
                
                
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
            <img alt="Spoons" width="100%" src={Wetherspoon} />
              <div>
                <h2>Wetherspoons</h2>
                <p>Small shop that stocks essentials for uni life</p>
                  <p><button className="button">Menu</button></p>
              </div>
            </div>
          </div>
        </div>
                  
        
     
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>

    
  );
  
}



export default StudentHome;
