import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const BalancePage = () => {
  const { transactions } = useContext(TransactionContext);
  
  const calculateBalance = () => {
    return transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  return (
    <Container>
      <h2>Balance</h2>
      <p>Your current balance is: ${calculateBalance()}</p>
    </Container>
  );
};

export default BalancePage;
