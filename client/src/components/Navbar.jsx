import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled(motion.nav)`
  background-color: #333;
  padding: 10px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const NavItem = styled(motion.li)`
  margin: 0 10px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

const Navbar = () => {
  return (
    <Nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavList>
        <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </NavItem>
        <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavLink to="/transactions">Transactions</NavLink>
        </NavItem>
        <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavLink to="/balance">Balance</NavLink>
        </NavItem>
        {/* Add more NavItem and NavLink for other pages */}
      </NavList>
    </Nav>
  );
};

export default Navbar;
