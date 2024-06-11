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

    await executeQuery(`
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
    const { email, password } = req.query;

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

app.post('/api/transactions', async (req, res) => {
  try {
    const { email, description, amount, type } = req.body;
    const parsedAmount = parseFloat(amount);

    const userResult = await executeQuery(`
      SELECT balance FROM users WHERE email = ?
    `, [email]);

    if (userResult.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = userResult[0];
    const currentBalance = parseFloat(user.balance) || 0;
    const newBalance = type === 'debit' ? currentBalance - parsedAmount : currentBalance + parsedAmount;

    await executeQuery(`
      INSERT INTO transactions (user_email, description, amount, type)
      VALUES (?, ?, ?, ?)
    `, [email, description, parsedAmount, type]);

    await executeQuery(`
      UPDATE users SET balance = ? WHERE email = ?
    `, [newBalance, email]);

    res.json({ message: 'Transaction added and balance updated' });
  } catch (error) {
    console.error('Error adding transaction:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/api/transactions', async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const transactions = await executeQuery(`
      SELECT description, amount, type, created_at
      FROM transactions
      WHERE user_email = ?
      ORDER BY created_at DESC
    `, [email]);

    res.json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
