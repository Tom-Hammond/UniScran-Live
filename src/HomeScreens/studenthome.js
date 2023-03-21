import React from "react";
import "./homescreen.css";

const name = localStorage.getItem("name");

function StudentHome(props) {
  const handleLogout = () => {
    props.setLoggedIn(false);
  };

  return (
    <div>
      <div className="container">
        <h1 className="home-Title">UniScran</h1>
        <div className="button-container">
          <button className="button" onClick={() => console.log("Place order clicked")}>
            Track order
          </button>
          <button className="button" onClick={() => console.log("Track order clicked")}>
            Order history
          </button>
          <button className="button" onClick={() => console.log("Manage account clicked")}>
            Manage account
          </button>
        </div>
        <h3 className="hey-msg">Hey {name}, Wanna order some SCRAN?</h3>
        <h1 className="home-action">Restaurants:</h1>
        <button className="logout-btn" onClick={handleLogout}>
        Logout
        </button>
    </div>
    </div>
  );
}

export default StudentHome;
