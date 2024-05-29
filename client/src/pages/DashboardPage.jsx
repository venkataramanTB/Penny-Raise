import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const DashboardPage = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default DashboardPage;
