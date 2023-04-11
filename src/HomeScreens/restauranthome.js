import React from "react";
import "./Home.css";
import ManageMenu from "../ManageMenu/ManageMenu";


const name = localStorage.getItem("name");
const cuisine  = localStorage.getItem("cuisine");


function RestaurantHome(props) {
  const handleLogout = () => {
    props.setLoggedIn(false);
  };

  function createMenu() {
    console.log("Order History clicked"); 
  }

  function orderHistory() {
    console.log("Order History clicked");
  }

  function manageAccount() { }

  
  return (
    <div className="home-screen-container">
      <h1 className="home-Title">UniSCRAN</h1>
      <div className="button-container">
        <button className="button" onClick={createMenu}> 
        Order Requests
        </button>
        <button className="button" onClick={orderHistory}> 
        Order History
        </button>
        <button className="button" onClick={manageAccount}> 
        Edit Account
        </button>
        </div>
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
