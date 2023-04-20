import React from "react";
import "../HomeScreens/homescreen.css";
import ManageMenu from "../ManageMenu/ManageMenu";
import StudentHome from "../HomeScreens/StudentHome";
import { useNavigate } from 'react-router-dom';
import ManageDetails from "./ManageDetails";

const user_type = localStorage.getItem("user_type");

function OrderHistory(props) {
  const navigate = useNavigate(); ///Navigate to different user screens 

  const handleLogout = () => {///Navigate to LOGIN screen
    localStorage.clear();
    navigate('/');
  };
  const manageDetails = () => {///Navigate to MANAGE DETAILS screen
    navigate(`/ManageDetails`); 
   }
  const backHome = () => { ///Navigate to HOME screen
    navigate(`/Home`);
  }

  return (
    <div className="order-history-screen-container">
      <h1 className="order-history-title">UniSCRAN</h1>
      <div className="button-container">
        <button className="button" onClick={backHome}> 
        Home   </button>
        <button className="button" onClick={''}> 
        Order History
        </button>
        <button className="button" onClick={manageDetails}> 
        Edit Details
        </button>
        </div>
      <h1>FEATURE COMING SOON</h1>
      <h3>Order History </h3>
       <button className="logout-btn" onClick={handleLogout}>
        Logout
     </button>
    </div>
  );
}


export default OrderHistory;
