import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { Login } from "./Login";
import Register from "./Register";
import StudentHome from "./HomeScreens/studenthome.js";
import RestaurantHome from "./HomeScreens/restauranthome";
import DriverHome from "./HomeScreens/driverhome";


//// USED https://www.youtube.com/watch?v=Y-XW9m8qOis TO CREATE REGISTER AND LOGIN 
//// Used https://www.youtube.com/watch?v=Lb9Basl0StM for register and login backend
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [formType, setFormType] = useState("login");
  const usertype = localStorage.getItem("usertype");

  const handleFormSwitch = (form) => {
    setFormType(form);
  };

  return (
    <div className="App">
      {!loggedIn ? (
        formType === "login" ? (
          <Login setLoggedIn={setLoggedIn} onFormSwitch={handleFormSwitch} />
        ) : (
          <Register onFormSwitch={handleFormSwitch} />
        )
      ) : (
        <div className="auth-form-container">
         {usertype === "Student" && <StudentHome setLoggedIn={setLoggedIn} />}
         {usertype === "Restaurant" && <RestaurantHome setLoggedIn={setLoggedIn} />}
         {usertype === "Driver" && <DriverHome setLoggedIn={setLoggedIn} />}
        </div>
      )}
    </div>
  );
}

export default App;
//// USED https://www.youtube.com/watch?v=Y-XW9m8qOis TO CREATE REGISTER AND LOGIN 
//// Used https://www.youtube.com/watch?v=Lb9Basl0StM for register and login backend
