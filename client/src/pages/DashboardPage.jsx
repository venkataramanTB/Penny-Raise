import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import styled from 'styled-components';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import LogoutIcon from '@mui/icons-material/Logout'; // Import Logout icon
import anime from 'animejs/lib/anime.es.js'; // Import anime.js

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative; /* Position relative for logout button positioning */
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const NeonOutlineIcon = styled(ListItemIcon)`
  svg {
    stroke: transparent;
    transition: stroke 0.3s;
  }

  &:hover {
    svg {
      stroke: #ff00ff; /* Neon color */
      stroke-width: 2px; /* Neon thickness */
      stroke-linecap: round; /* Rounded ends */
      stroke-linejoin: round; /* Rounded corners */
    }
    transform: scale(1.1); /* Zoom in effect on hover */
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  color: #3498db;
  transition: color 0.3s;

  &:hover {
    color: #ff0000;
  }
`;

const DashboardPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle click animation
  const handleClick = () => {
    anime({
      targets: '.menu-item',
      scale: [1, 0.5], // Zoom out animation
      duration: 500,
      easing: 'easeInOutQuad',
    });
  };

  // Function to handle logout
  const handleLogout = () => {
    sessionStorage.clear(); // Clear sessionStorage on logout
    navigate('/'); // Navigate to '/' after logout
  };

  return (
    <Container>
      <TitleContainer>
        <h2>Dashboard</h2>
        <LogoutButton onClick={handleLogout}>
          <LogoutIcon />
        </LogoutButton>
      </TitleContainer>
      <List>
        <StyledLink to="/transactions">
          <ListItem button className="menu-item" onClick={handleClick}>
            <NeonOutlineIcon>
              <CompareArrowsIcon />
            </NeonOutlineIcon>
            <ListItemText primary="View Transactions" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/balance">
          <ListItem button className="menu-item" onClick={handleClick}>
            <NeonOutlineIcon>
              <AccountBalanceWalletIcon />
            </NeonOutlineIcon>
            <ListItemText primary="Check Balance" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/add-money">
          <ListItem button className="menu-item" onClick={handleClick}>
            <NeonOutlineIcon>
              <AttachMoneyIcon />
            </NeonOutlineIcon>
            <ListItemText primary="Add Money" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/add-transaction">
          <ListItem button className="menu-item" onClick={handleClick}>
            <NeonOutlineIcon>
              <AddBoxIcon />
            </NeonOutlineIcon>
            <ListItemText primary="Add Transaction" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/profile">
          <ListItem button className="menu-item" onClick={handleClick}>
            <NeonOutlineIcon>
              <PersonIcon />
            </NeonOutlineIcon>
            <ListItemText primary="View Profile" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/badges">
          <ListItem button className="menu-item" onClick={handleClick}>
            <NeonOutlineIcon>
              <BadgeIcon />
            </NeonOutlineIcon>
            <ListItemText primary="View Badges" />
          </ListItem>
        </StyledLink>
      </List>
    </Container>
  );
};

export default DashboardPage;
