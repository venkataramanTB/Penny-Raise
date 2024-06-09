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
    const { firstName, lastName, username, email, phoneNumber, age, salary, jobRole, companyName } = req.body;

    const result = await executeQuery(`
      INSERT INTO Users (first_name, last_name, username, email, phone_number, age, salary, job_role, company_name)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [firstName, lastName, username, email, phoneNumber, age, salary, jobRole, companyName]);

    res.status(201).json({ message: 'User signed up successfully' });
  } catch (error) {
    console.error('Error signing up user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
