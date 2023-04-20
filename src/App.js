import React, { useState } from "react";
import { useNavigate,BrowserRouter as Router, Switch } from 'react-router-dom';
import axios from "axios";
import {  Routes, Route } from 'react-router-dom';
import "./RegisterLogin/RegisterLogin.css";
import { LoginForm } from "./RegisterLogin/LoginForm";
import RegisterForm from "./RegisterLogin/RegisterForm";
import StudentHome from "./HomeScreens/StudentHome.js";
import RestaurantHome from "./HomeScreens/RestaurantHome";
import DriverHome from "./HomeScreens/DriverHome";
import ViewMenu from "./Order/ManageOrder";
import ManageDetails from "./ManageAccount.js/ManageDetails";
import OrderHistory from "./ManageAccount.js/OrderHistory";
import ViewBasket from "./Order/ViewBasket";

function App() {
  const usertype = localStorage.getItem("user_type");

  let directUserHome;

  if (usertype === "Student") {
    directUserHome = ( 
   <StudentHome/>
    );
  }
    if (usertype==="Restaurant")
    {
      directUserHome = ( 
        <RestaurantHome/>
         );
    }
    if (usertype==="Driver")
    {
      directUserHome = ( 
        <DriverHome/>
         );
    }
  
  return (
    <div className="App">
          <Routes>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="/Register" element={<RegisterForm/>}/>
               <Route path="/Home" element={directUserHome}  />
               <Route path="/ViewMenu" element={<ViewMenu/>} />
               <Route path="/ManageDetails" element={<ManageDetails/>} />
               <Route path="/OrderHistory" element={<OrderHistory/>} />
               <Route path="/ViewBasket" element={<ViewBasket/>} />
        </Routes>  
        </div>
      )
}

export default App;

//// USED https://www.youtube.com/watch?v=Y-XW9m8qOis TO CREATE REGISTER AND LOGIN 
//// Used https://www.youtube.com/watch?v=Lb9Basl0StM for register and login backend
