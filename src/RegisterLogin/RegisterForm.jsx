import React, { useState } from "react";
import axios from "axios";
import "./RegisterLogin.css";

const RegisterForm = (props) => {///Set fields for registration 
  const [user, SetUser] = useState("Student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [studentIdNumber, setStudentIdNumber] = useState("");
  const [address, setAddress] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [openAndCloseTimes, setOpenAndCloseTimes] = useState("");
  const [availability, setAvailability]= useState("");

  const [registerStatus, setRegisterStatus] = useState("");

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
        });
      }

    if (response.data.rowCount > 0) {///Check the data inputted into database
        setRegisterStatus("Account registration successful");///Display success message
      } else {
        setRegisterStatus("Registration unsuccessful: Failed inserting data into the database.");///Display error message
      }
    } catch (error) {
      console.error(error);
      setRegisterStatus("Error: " + error.message);///Display error message
    }
  };

  let additionalFields;

  if (user === "Student" || user === "Driver") {///Set additional fields for student and driver registration
    additionalFields = (
      <>
         <label htmlFor="name">Name:</label>
         <input
         value={name}
         type="text"
         placeholder="John Smith"
         id="name"
         name="name"
         className="input-field"
         onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="studentId">Student ID:</label>
        <input
          value={studentIdNumber}
          type="text"
          placeholder="1231234"
          id="studentId"
          name="studentId"
          className="input-field"
          onChange={(e) => setStudentIdNumber(e.target.value)}
        />
        <label htmlFor="phone">Phone number:</label>
        <input
          value={phone}
          type="text"
          placeholder="078193832"
          id="phone"
          name="phone"
          className="input-field"
          onChange={(e) => setPhone(e.target.value)}
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
        />
      </>
    );

} else if (user === "Restaurant") {///Set additional fields for restaurant registration
    additionalFields = (
    <>
    <label htmlFor="restaurantName">Restaurant Name:</label>
    <input
    value={name}
    type="text"
    placeholder="KFC"
    id="restaurantName"
    name="restaurantName"
    className="input-field"
    onChange={(e) => setName(e.target.value)}
    />
     <label htmlFor="cuisine">Cuisine:</label>
    <input
    value={cuisine}
    type="text"
    placeholder="Chicken"
    id="cuisine"
    name="cuisine"
    className="input-field"
    onChange={(e) => setCuisine(e.target.value)}
    />
    <label htmlFor="phone">Phone phone:</label>
    <input
    value={phone}
    type="text"
    placeholder="123412345"
    id="phone"
    name="phone"
    className="input-field"
    onChange={(e) => setPhone(e.target.value)}
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
    onChange={(e) => SetUser(e.target.value)}
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
    />
    <label htmlFor="password">Password:</label>
    <input
    value={password}
    type="password"
    placeholder="*********"
    id="password"
    name="password"
    className="input-field"
    onChange={(e) => setPassword(e.target.value)}
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
    <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
    Already have an account? Login here.
    </button>
    </div>
    );
    };
    
    export default RegisterForm;