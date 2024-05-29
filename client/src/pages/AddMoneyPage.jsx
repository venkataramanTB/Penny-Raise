import React, { useContext, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { useNavigate } from 'react-router-dom';

const AddMoneyPage = () => {
  const { setTransactions } = useContext(TransactionContext);
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactions(prev => [...prev, { type: 'credit', amount: parseFloat(amount) }]);
    navigate('/balance');
  };

  return (
    <div>
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
    </div>
  );
};

export default AddMoneyPage;