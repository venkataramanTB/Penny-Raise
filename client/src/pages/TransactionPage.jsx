import React, { useEffect, useState, useRef } from 'react';
import { Container, Typography, List, ListItem, Divider, Paper, Button, Pagination } from '@mui/material';
import anime from 'animejs/lib/anime.es.js';

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);
  const transactionsPerPage = 5;
  const listRef = useRef(null);

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem('LoggedIn');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setTransactions(user.transactions || []);
    }
  }, []);

  useEffect(() => {
    if (transactions.length > 0) {
      animateTransactions();
    }
  }, [transactions]);

  const animateTransactions = () => {
    if (listRef.current) {
      anime({
        targets: listRef.current.children,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
        easing: 'easeInOutQuad',
        delay: anime.stagger(100)
      });
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * transactionsPerPage;
  const endIndex = startIndex + transactionsPerPage;
  const currentTransactions = transactions.slice(startIndex, endIndex);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Transactions
      </Typography>
      <Paper elevation={3} sx={{ borderRadius: '10px', marginBottom: '20px' }}>
        <List ref={listRef}>
          {currentTransactions.map((transaction, index) => (
            <React.Fragment key={index}>
              <ListItem style={{ opacity: 0, transform: 'translateY(20px)' }}>
                <Typography variant="subtitle1">{transaction.description}</Typography>
                <Typography variant="subtitle1" sx={{ ml: 'auto', color: transaction.amount >= 0 ? 'green' : 'red' }}>
                  ₹{transaction.amount}
                </Typography>
              </ListItem>
              {index !== currentTransactions.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <Pagination
        count={Math.ceil(transactions.length / transactionsPerPage)}
        page={page}
        onChange={handleChangePage}
        color="primary"
        size="large"
        sx={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}
      />
      <Button variant="contained" color="primary" onClick={() => window.location.href = '/dashboard'} fullWidth>
        Go to Dashboard
      </Button>
    </Container>
  );
};

export default TransactionPage;
