import React, { useContext, useState, useEffect } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const AddMoneyPage = () => {
  const { setTransactions } = useContext(TransactionContext);
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedBalance = sessionStorage.getItem('LoggedIn');
    if (storedBalance.balance) {
      setAmount(parseFloat(storedBalance));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAmount = parseFloat(amount);
    const storedBalance = sessionStorage.getItem('balance');
    const currentBalance = storedBalance ? parseFloat(storedBalance) : 0;
    const updatedBalance = currentBalance + newAmount;
    sessionStorage.setItem('balance', updatedBalance);
    setTransactions(prev => [...prev, { type: 'credit', amount: newAmount }]);
    navigate('/balance');
  };

  return (
    <Container>
      <h2>Add Money</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </Container>
  );
};

export default AddMoneyPage;
