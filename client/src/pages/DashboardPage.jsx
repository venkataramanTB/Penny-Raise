import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #3498db;
    transform: translateX(5px);
  }
`;

const DashboardPage = () => {
  return (
    <Container>
      <h2>Dashboard</h2>
      <List>
        <StyledLink to="/transactions">
          <ListItem button>
            <ListItemIcon>
              <CompareArrowsIcon />
            </ListItemIcon>
            <ListItemText primary="View Transactions" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/balance">
          <ListItem button>
            <ListItemIcon>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText primary="Check Balance" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/add-money">
          <ListItem button>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Add Money" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/add-transaction">
          <ListItem button>
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Add Transaction" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/profile">
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="View Profile" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/badges">
          <ListItem button>
            <ListItemIcon>
              <BadgeIcon />
            </ListItemIcon>
            <ListItemText primary="View Badges" />
          </ListItem>
        </StyledLink>
      </List>
    </Container>
  );
};

export default DashboardPage;
