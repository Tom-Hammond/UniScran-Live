import React, { useState } from "react";
import axios from "axios";
import "./RegisterLogin.css";
import { useNavigate } from "react-router-dom";

const RegisterForm = (props) => {///Set fields for registration 
  const [user, setUser] = useState("Student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [studentIdNumber, setStudentIdNumber] = useState("");
  const [address, setAddress] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const [registerStatus, setRegisterStatus] = useState("");


  const navigate = useNavigate();

  function loginForm() {
    navigate(`/`); 
  }

  const handleSubmit = async (e) => {///Send registration fields to server.js to input into db
    e.preventDefault();
    try {
      let response;

      if (user === "Student"){///Handle student registration
        response = await axios.post("http://localhost:3001/register", {
          user_type: user,
          name,
          email,
          password,
          student_id_number: studentIdNumber,
          phone,
          address,
        });
      }
      if (user === "Driver"){///Handle driver registration
        response = await axios.post("http://localhost:3001/register", {
          user_type: user,
          name,
          email,
          password,
          student_id_number: studentIdNumber,
          phone,
          address,
          
        });
      } 
      else if (user === "Restaurant") {///Handle restaurant registration
        response = await axios.post("http://localhost:3001/register", {
          user_type: user,
          name,
          email,
          password,
          cuisine,
          phone,
          address,
          description,
          image,
        });
      }

    if (response.data.rowCount > 0) {///Check the data inputted into database
        setRegisterStatus("Account registration successful");///Display success message
      } else {
        setRegisterStatus("Registration unsuccessful: Failed inserting data into the database.");///Display error message
      }
    } catch (error) {
      console.error(error);
      setRegisterStatus("Registration unsuccessful: Email address already registered.");///Display error message
    }
  };

  let additionalFields;

  if (user === "Student" || user === "Driver") {///Set additional fields for student and driver registration
    additionalFields = (
      <>
         <label htmlFor="name">Name:</label>
         <input
         pattern="(?=.[a-z] || [A-Z]).{1,20}" title="Name must be between 1 and 20 characters."
         value={name}
         type="text"
         placeholder="John Smith"
         id="name"
         name="name"
         className="input-field"
         onChange={(e) => setName(e.target.value)}
         required
        />
        <label htmlFor="studentId">Student ID:</label>
        <input
          value={studentIdNumber}
          type="text"
          pattern="[0-9]*" title="Student ID must only include numbers."
          placeholder="1231234"
          id="studentId"
          name="studentId"
          className="input-field"
          onChange={(e) => setStudentIdNumber(e.target.value)}
          required
        />
        <label htmlFor="phone">Phone Number:</label>
        <input
          value={phone}
          type="text"
          pattern="[0-9]*" title="Phone Number must only include numbers."      
          placeholder="078193832"
          id="phone"
          name="phone"
          className="input-field"
          onChange={(e) => setPhone(e.target.value)}
          required
          />
        <label htmlFor="address">Home Address:</label>
        <input
          value={address}
          type="text"
          placeholder="1 Cottingham Road"
          id="address"
          name="address"
          className="input-field"
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </>
    );

} else if (user === "Restaurant") {///Set additional fields for restaurant registration
    additionalFields = (
    <>
    <label htmlFor="phone">Phone Number:</label>
    <input
    value={phone}
    type="text"
    pattern="[0-9]*" title="Phone Number must only include numbers."
    placeholder="078193832"
    id="phone"
    name="phone"
    className="input-field"
    onChange={(e) => setPhone(e.target.value)}
    required
    />
    <label htmlFor="restaurantAddress">Restaurant Address:</label>
    <input
    value={address}
    type="text"
    placeholder="1 Cottingham Road"
    id="restaurantAddress"
    name="restaurantAddress"
    className="input-field"
    onChange={(e) => setAddress(e.target.value)}
    required
    />
    <h3>Please note the following fields will be displayed to customers.</h3>
        <label htmlFor="restaurantName">Restaurant Name:</label>
    <input
    pattern="(?=.[a-z] || [A-Z]).{1,20}" title="Restaurant name must be between 1 and 20 characters"
    value={name}
    type="text"
    placeholder="KFC"
    id="restaurantName"
    name="restaurantName"
    className="input-field"
    onChange={(e) => setName(e.target.value)}
    required
    />
     <label htmlFor="cuisine">Cuisine:</label>
    <input
    pattern="(?=.[a-z] || [A-Z]).{1,20}" title="Cuisine must be between 1 and 20 characters"
    value={cuisine}
    type="text"
    placeholder="Chicken"
    id="cuisine"
    name="cuisine"
    className="input-field"
    onChange={(e) => setCuisine(e.target.value)}
    required
    />
        <label htmlFor="restaurantName">Restaurant Description:</label>
    <input
    value={description}
    type="text"
    placeholder="KFC"
    id="restaurantName"
    name="restaurantName"
    className="input-field"
    onChange={(e) => setDescription(e.target.value)}
    required
    />
     <label htmlFor="cuisine">Restaurant Image (Url):</label>
    <input
    value={image}
    type="text"
    placeholder="Chicken"
    id="cuisine"
    name="cuisine"
    className="input-field"
    onChange={(e) => setImage(e.target.value)}
    required
    />
    </>
    );
    }
    
    return (
    <div className="auth-form-container">
    <h1 className="Title">UniSCRAN</h1>
    <h2 className="login-register">Register</h2>
    <form className="register-form" onSubmit={handleSubmit}>
    <label htmlFor="user">Select a user type:</label>
    <select
    value={user}
    id="user"
    name="user"
    onChange={(e) => setUser(e.target.value)}
    required
    >
    <option value="Student">Student</option>
    <option value="Restaurant">Restaurant</option>
    <option value="Driver">Driver</option>
    </select>
    <label htmlFor="email">Email:</label>
    <input
    value={email}
    type="email"
    placeholder="j.smith@hull.ac.uk"
    id="email"
    name="email"
    className="input-field"
    onChange={(e) => setEmail(e.target.value)}
    required
    />
    <label htmlFor="password">Password:</label>
    <input
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}" title="Must contain at least one number and one uppercase and lowercase letter, and be between 5 and 20 characters"
    value={password}
    type="password"
    placeholder="*********"
    id="password"
    name="password"
    className="input-field"
    onChange={(e) => setPassword(e.target.value)}
    required
    />
    {additionalFields}
    <button type="submit" className="register-btn">
    Register
    </button>
    {registerStatus && (
    <p
    className={
    registerStatus.includes("successful")
    ? "success-message"
    : "error-message"
    }
    >
    {registerStatus}
    </p>
    )}
    </form>
    <button className="link-btn" onClick={loginForm}>
    Already have an account? Login here.
    </button>
    </div>
    );
    };
    
    export default RegisterForm;