const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");


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


  // Receive register fields from register.js and input into users db table
app.post("/register", async (req, res) => {
  const { email, password, name, phone, user_type, student_id_number, address, cuisine } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO users (user_type, email, password, name, phone, student_id_number, address, cuisine) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [user_type, email, password, name, phone, student_id_number, address, cuisine]
    );
    res.json({ rowCount: result.rowCount });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to insert data into the database." });
  }
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  pool.query("SELECT id, user_type, name, cuisine FROM users WHERE email = $1 AND password = $2", [email, password],
      (err, result) => {
          if (result.rowCount > 0) {
              const { id, user_type, name, cuisine } = result.rows[0];
            
              res.send({ id, user_type, name, cuisine });
          } else {
              res.send({ message: "Incorrect Email and Password combination." })
          }

      }
  );
});

app.get('/menu', async (req, res) => {
  try {
    const {id} = req.body;
    console.log(req.body);
    const result = await pool.query('SELECT id, item_name, item_price, image, description FROM menu WHERE restaurant_id = $1', [req.query.id]);

    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.send({ message: 'Error: Failed fetching data from database.' });
  }
});

app.post('/menu', async (req, res) => {
  try {
    const { userId, name, price, description, image } = req.body;
    console.log('a:', userId);
    const result = await pool.query(
      'INSERT INTO menu (restaurant_id, item_name, item_price, image, description) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [ userId, name, price, description, image]
    );

    if (result.rowCount > 0) {
      res.send({ message: 'Menu item added successfully.', item: result.rows[0] });
    } else {
      res.send({ message: 'No rows affected.' });
    }
  } catch (err) {
    console.error(err);
    res.send({ message: 'Error: Failed inserting data into database.' });
  }
});

app.put('/menu/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Updating menu item with id:', id);
    const { name, price, description, image } = req.body;
    console.log('name', name,'price', price, description, image);
    const result = await pool.query(
      'UPDATE menu SET item_name = $2, item_price = $3, image = $4, description = $5 WHERE id=$1',
      [ id, name, price, description, image]
    );

    if (result!= null) {
      res.send({ message: 'Menu item updated successfully.' });
    } else {
      res.send({ message: 'No rows affected.' });
    }
  } catch (err) {
    console.error(err);
    res.send({ message: 'Error: Failed updating data in database.' });
  }
});

// DELETE method
app.delete('/menu/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const result = await pool.query('DELETE FROM menu WHERE id = $1', [id]);

    if (result.rowCount > 0) {
      res.send({ message: 'Menu item deleted successfully.' });
    } else {
      res.send({ message: 'No rows affected.' });
    }
  } catch (err) {
    console.error(err);
    res.send({ message: 'Error: Failed deleting data from database.' });
  }
});

app.get('/openshops', async (req, res) => {
  try {
    const {id} = req.body;
    console.log(req.body);
    const result = await pool.query('SELECT id, opentime FROM user WHERE restaurant_id = $1', [req.query.id]);

    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.send({ message: 'Error: Failed fetching data from database.' });
  }
});

app.get('/closetime', async (req, res) => {
  try {
    const {id} = req.body;
    console.log(req.body);
    const result = await pool.query('SELECT restaurant_id, name, cuisine FROM user WHERE opentime >=$1 && closetime >=$1', [req.query.id]);

    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.send({ message: 'Error: Failed fetching data from database.' });
  }
});


/// Listen on port 3001
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`running backend server on port ${PORT}`);
});
//// USED https://www.youtube.com/watch?v=Y-XW9m8qOis TO CREATE REGISTER AND LOGIN 
//// Used https://www.youtube.com/watch?v=Lb9Basl0StM for register and login backend

