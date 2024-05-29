import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const TransactionPage = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>{transaction}</li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionPage;