import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const BalancePage = () => {
  const { transactions } = useContext(TransactionContext);
  
  const calculateBalance = () => {
    return transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  return (
    <div>
      <h2>Balance</h2>
      <p>Your current balance is: ${calculateBalance()}</p>
    </div>
  );
};

export default BalancePage;