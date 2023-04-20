import React from "react";
import "./homescreen.css";
import { useNavigate } from "react-router-dom";

const name = localStorage.getItem("name");

function DriverHome() {
  
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
  
    <div className="container">
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
      <h3 className="hey-msg">Hey {name}, Welcome to UniSCRAN</h3>
      <input type="checkbox" />
      <h1 className="d-home-action">Current Orders:</h1>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default DriverHome;
