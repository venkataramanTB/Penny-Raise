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

const AddTransactionPage = () => {
  const { transactions, setTransactions } = useContext(TransactionContext);
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('credit'); // Default transaction type is credit

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);
    const newTransaction = {
      description,
      amount: type === 'debit' ? -parsedAmount : parsedAmount // If type is debit, negate the amount
    };

    // Update transactions context
    setTransactions([...transactions, newTransaction]);

    // Update balance in session storage based on transaction type
    const storedBalance = sessionStorage.getItem('balance');
    let updatedBalance = storedBalance ? parseFloat(storedBalance) : 0;
    if (type === 'debit') {
      updatedBalance -= parsedAmount;
    } else {
      updatedBalance += parsedAmount;
    }
    sessionStorage.setItem('balance', updatedBalance.toString());

    // Save transaction details in session storage
    const storedTransactions = JSON.parse(sessionStorage.getItem('transactions')) || [];
    const updatedTransactions = [...storedTransactions, newTransaction];
    sessionStorage.setItem('transactions', JSON.stringify(updatedTransactions));

    // Navigate to transactions page
    navigate('/transactions');
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
        <Button type="submit" variant="contained" color="primary">Add</Button>
      </form>
    </Container>
  );
};

export default AddTransactionPage;
