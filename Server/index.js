require('dotenv').config(); 
const express = require("express");
const cors = require("cors");
const { executeQuery } = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('build'));

app.post('/api/signup', async (req, res) => {
  try {
    const { firstName, lastName, username, email, phoneNumber, age, salary, balance, jobRole, companyName, password } = req.body;

    const result = await executeQuery(`
      INSERT INTO users (first_name, last_name, username, email, phone_number, age, salary, balance, job_role, company_name, password)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [firstName, lastName, username, email, phoneNumber, age, salary, balance, jobRole, companyName, password]);

    res.status(201).json({ message: 'User signed up successfully' });
  } catch (error) {
    console.error('Error signing up user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/api/login', async (req, res) => {
  try {
    const { email, password } = req.query;  // Use req.query for GET parameters

    // Ensure email and password are not undefined
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const result = await executeQuery(`
      SELECT * FROM users WHERE email = ? AND password = ?
    `, [email, password]);

    if (result.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    res.json({ user: result[0] });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
