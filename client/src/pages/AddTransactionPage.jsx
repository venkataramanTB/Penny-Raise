import React, { useContext, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import axios from 'axios';

const AddTransactionPage = () => {
  const { transactions, setTransactions } = useContext(TransactionContext);
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('credit'); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);
    const newTransaction = {
      description,
      amount: parsedAmount,
      type,
    };

    const loggedInUser = sessionStorage.getItem('LoggedIn');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);

      try {
        const response = await axios.post('http://localhost:5000/api/transactions', {
          email: user.email,
          description,
          amount: parsedAmount,
          type,
        });

        const { newBalance } = response.data;

        user.transactions = [...(user.transactions || []), newTransaction];
        user.balance = newBalance; 

        sessionStorage.setItem('LoggedIn', JSON.stringify(user));
        setTransactions([...transactions, newTransaction]);

        navigate('/transactions');
      } catch (error) {
        console.error('Error adding transaction:', error);
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          fullWidth
          type="number"
          label="Amount"
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <FormControl fullWidth variant="outlined">
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            labelId="type-label"
            value={type}
            onChange={(e) => setType(e.target.value)}
            label="Type"
          >
            <MenuItem value="credit">Credit</MenuItem>
            <MenuItem value="debit">Debit</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Add
        </Button>
      </form>
    </Container>
  );
};

export default AddTransactionPage;
