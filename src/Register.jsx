import React, { useState } from "react";
import axios from "axios";
import "./App.css";


//// USED https://www.youtube.com/watch?v=Y-XW9m8qOis TO CREATE REGISTER AND LOGIN 
//// Used https://www.youtube.com/watch?v=Lb9Basl0StM for register and login backend

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [user, setUser] = useState("Student");

  const [registerStatus, setRegisterStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/register", {
        email: email,
        password: password,
        name: name,
        number: number,
        user: user,
      });
      if (response.data.message) {
        setRegisterStatus(response.data.message);
      } else if (response.data.rowCount > 0) {
        setRegisterStatus("Account registration successful");
      } else {
        setRegisterStatus("Error: Failed inserting data into the database.");
        console.log('user', user);
      }
    } catch (error) {
      console.error(error);
      setRegisterStatus("Error: " + error.message);
    }
  };
  
  return (
    <div className="auth-form-container">
      <h1 className="Title">UniScran</h1>
      <h2 className="login-register">Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          value={email}
          type="email"
          placeholder="j.smith-2020@hull.ac.uk"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          value={password}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="name">Name:</label>
        <input
          value={name}
          type="text"
          placeholder="John Smith"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="number">Phone number:</label>
        <input
          value={number}
          type="text"
          placeholder="078XXXXXXXX"
          id="number"
          name="number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <label htmlFor="user">Select a user:</label>
        <select
          value={user}
          id="user"
          name="user"
          onChange={(e) => setUser(e.target.value)}
        >
          <option value="Student">Student</option>
          <option value="Driver">Driver</option>
          <option value="Restaurant">Restaurant</option>
        </select>
        <button type="submit" className="register-btn">
          Register
        </button>
        {registerStatus && <p className={registerStatus.includes("successful") ? "success-message" : "error-message"}>{registerStatus}</p>}
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("login")}
      >
        Already have an account? Login here.
      </button>
    </div>
  );
};

export default Register;