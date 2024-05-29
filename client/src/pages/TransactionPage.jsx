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

const TransactionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TransactionItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const TransactionPage = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <Container>
      <h2>Transactions</h2>
      <TransactionList>
        {transactions.map((transaction, index) => (
          <TransactionItem key={index}>
            {transaction.description}: ${transaction.amount}
          </TransactionItem>
        ))}
      </TransactionList>
    </Container>
  );
};

export default TransactionPage;
