import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/transactions">View Transactions</Link></li>
          <li><Link to="/balance">Check Balance</Link></li>
          <li><Link to="/add-money">Add Money</Link></li>
          <li><Link to="/add-transaction">Add Transaction</Link></li>
          <li><Link to="/profile">View Profile</Link></li>
          <li><Link to="/badges">View Badges</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardPage;