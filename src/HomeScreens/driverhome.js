import React from "react";
import "./Home.css";

const name = localStorage.getItem("name");

function DriverHome(props) {
  const handleLogout = () => {
    props.setLoggedIn(false);
  };
  return (
  
    <div className="container">
      <h1 className="home-Title">UniSCRAN</h1>
      <div className="button-container">
      <button className="button" onClick={() => console.log("Manage account clicked")}>
        Accept Orders
        </button>
        <button className="button" onClick={() => console.log("View orders")}>
        Order Updates  </button>
        <button className="button" onClick={() => console.log("Manage account clicked")}>
        Manage account
        </button>
        </div>
      <h3 className="hey-msg">Hey {name}, Welcome to UniSCRAN</h3>
      <h1 className="d-home-action">Current Orders:</h1>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default DriverHome;
