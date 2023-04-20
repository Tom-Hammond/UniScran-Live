import React from "react";
import "../HomeScreens/homescreen.css";
import ManageMenu from "../ManageMenu/ManageMenu";
import StudentHome from "../HomeScreens/StudentHome";
import { useNavigate } from 'react-router-dom';

const name = localStorage.getItem("name");
const cuisine  = localStorage.getItem("cuisine");

function ManageDetails(props) {
  const navigate = useNavigate(); ///Navigate to different user screens 

  const handleLogout = () => {///Navigate to LOGIN screen
    localStorage.clear();
    navigate('/');
  };
  const orderHistory = () => {///Navigate to ORDER HISTORY screen
    navigate(`/OrderHistory`); 
   }
  const backHome = () => { ///Navigate to HOME screen
    navigate(`/Home`);
  }

  return (
    <div className="manage-details-screen-container">
      <h1 className="manage-details-title">UniSCRAN</h1>
      <div className="button-container">
        <button className="button" onClick={backHome}> 
        Home
        </button>
        <button className="button" onClick={orderHistory}> 
        Order History
        </button>
        <button className="button" onClick={''}> 
        Edit Details
        </button>
        </div>
      <h1>FEATURE COMING SOON</h1>
      <h3>MANAGE DETAILS PAGE </h3>
       <button className="logout-btn" onClick={handleLogout}>
        Logout
     </button>
    </div>
  );
}


export default ManageDetails;
