/// Import modules
const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

//// USED https://www.youtube.com/watch?v=Y-XW9m8qOis TO CREATE REGISTER AND LOGIN 
//// Used https://www.youtube.com/watch?v=Lb9Basl0StM for register and login backend
const app = express();///Create express

app.use(express.json());///Configure express
app.use(cors()); 

const pool = new Pool({/// Connect to PostgreSQL UniScranDB db to make requests
  user: "postgres",
  password: "191200",
  host: "localhost",
  database: "UniScranDB",
  port: 5432, // default PostgreSQL port
});

app.post('/register', async (req, res) => {////Send request to 'register' body requesting register info
    try {
      const email = req.body.email;
      const password = req.body.password;
      const name = req.body.name;
      const number = req.body.number;
      const user = req.body.user;
      console.log('user', user);
  
      const result = await pool.query("INSERT INTO personaldetails(email, password, name, phone, usertype) VALUES($1, $2, $3, $4, $5)", [email, password, name, number, user]);
      /// Insert register details into postresql db 'UniScranDB.personaldetails'

      if (result.rowCount > 0) {/// Check if login is valid by returning number of rows affected in db and return message
        res.send(result);
      } else {
        res.send({ message: "No rows affected" });
      }
    } catch (err) {
      console.error(err);
      res.send({ message: "Error: Failed inserting data into database." });
    }
  });
  
  
  

app.post('/login', (req, res) => {///Get inputs from login page containing username and password
    const email = req.body.email;
    const password = req.body.password;

    /// Select usertype and name where valid login combination entered.
    pool.query("SELECT usertype, name FROM personaldetails WHERE email = $1 AND password = $2", [email, password],
        (err, result) => {
            if(result.rowCount > 0) {///If login combo correct
                const { usertype, name } = result.rows[0];
                res.send({ usertype, name });//Send usertype and name to login.js
                console.log('usertype:', usertype);
                console.log('name:', name);
            } else {
                res.send({ message: "Incorrect Email and Password combination." })
            }
        }
    );
});


//started to get the order history query underway
app.post('/orderHistory', (req, res) => {///Get inputs from login page containing username and password
  const customername = req.body.password;
  const restruantname = req.body.password;
  const totalprice = req.body.password;

  /// Select customername and resturantname, totalprice from database.
  pool.query("SELECT customername, resturantname, totalprice FROM orderhistory WHERE customername = $1 || restruantname = $2", [customername, restruantname],
      (err, result) => {
          
             
        res.send({ customername, name, totalprice });//Send customername and resturantname and totalprice
        console.log('customername:', customername);
        console.log('resturantname:', restruantname);
        console.log('totalprice:', totalprice);
              
          
      }
  );
});

/// Listen on port 3001
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`running backend server on port ${PORT}`);
});
//// USED https://www.youtube.com/watch?v=Y-XW9m8qOis TO CREATE REGISTER AND LOGIN 
//// Used https://www.youtube.com/watch?v=Lb9Basl0StM for register and login backend

