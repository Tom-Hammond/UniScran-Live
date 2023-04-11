import React, { useState } from "react";
import { useNavigate,BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from "axios";
import "./RegisterLogin/RegisterLogin.css";
import { LoginForm } from "./RegisterLogin/LoginForm";
import RegisterForm from "./RegisterLogin/RegisterForm";
import StudentHome from "./HomeScreens/StudentHome.js";
import RestaurantHome from "./HomeScreens/RestaurantHome";
import DriverHome from "./HomeScreens/DriverHome";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [formType, setFormType] = useState("login");
  const usertype = localStorage.getItem("user_type");

  const handleFormSwitch = (form) => {
    setFormType(form);
  };

  return (
    <div className="App">
      {!loggedIn ? (     
        formType === "login" ? (
          <LoginForm setLoggedIn={setLoggedIn} onFormSwitch={handleFormSwitch} />
        ) : (     
          <RegisterForm onFormSwitch={handleFormSwitch} />
        )
      ) : (
  
        <div className="auth-form-container">  
          {usertype === "Student" && (
            <StudentHome setLoggedIn={setLoggedIn} />
          )}
          {usertype === "Restaurant" && (
            <RestaurantHome setLoggedIn={setLoggedIn}/>
          )}
          {usertype === "Driver" && (
          <DriverHome setLoggedIn={setLoggedIn} />
          )}
        </div>
      )
      }
    </div>
  );
}

export default App;

//// USED https://www.youtube.com/watch?v=Y-XW9m8qOis TO CREATE REGISTER AND LOGIN 
//// Used https://www.youtube.com/watch?v=Lb9Basl0StM for register and login backend
