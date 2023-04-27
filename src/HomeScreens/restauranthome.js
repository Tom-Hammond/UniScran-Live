import React from "react";
import "./homescreen.css";
import ManageMenu from "../ManageMenu/ManageMenu";
import { useNavigate } from "react-router-dom";


const name = localStorage.getItem("name"); ///<mozilla> (<Apr 8 2023>) <Storage: setItem() method> (<React js>) [<forum>]. https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem.
const cuisine  = localStorage.getItem("cuisine");


function RestaurantHome(props) {
  
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

  return (
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
      <h1>Incoming Orders:</h1>
      <h2 className="home-action">Manage Menu:</h2>
      <h3 className="hey-msg">Restaurant Name: {name}, Cuisine: {cuisine} </h3>
      <ManageMenu></ManageMenu>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
     </button>
    </div>
  );
}

export default RestaurantHome;
