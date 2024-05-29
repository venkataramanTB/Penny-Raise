import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, Divider, Paper } from '@mui/material';

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Retrieve transaction data from session storage
    const storedTransactions = sessionStorage.getItem('transactions');
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Transactions
      </Typography>
      <Paper elevation={3} sx={{ borderRadius: '10px' }}>
        <List>
          {transactions.map((transaction, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <Typography variant="subtitle1">{transaction.description}</Typography>
                <Typography variant="subtitle1" sx={{ ml: 'auto' }}>
                  ${transaction.amount}
                </Typography>
              </ListItem>
              {index !== transactions.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default TransactionPage;
