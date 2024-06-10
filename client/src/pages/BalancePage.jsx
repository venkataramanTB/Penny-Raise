import React, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled(Link)`
  display: block;
  text-decoration: none;
  color: #3498db;
  margin-top: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const BalancePage = () => {
  const { transactions } = useContext(TransactionContext);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem('LoggedIn');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setBalance(user.balance);
    }
  }, []);

  return (
    <Container>
      <h2>Balance</h2>
      <p>Your current balance is: ₹{balance}</p>
      <BackButton to="/dashboard">Back to Dashboard</BackButton>
    </Container>
  );
};

export default BalancePage;
