import React, { useState, useEffect } from "react";
import Transaction from './Transaction.jsx';
import Balance from './Balance';

const Home = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        setTransactions([
            { id: 1, name: 'Salary', amount: 5000 },
            { id: 2, name: 'Rent', amount: -2000 },
            { id: 3, name: 'Groceries', amount: -500 },
        ]);
    }, []);

    return (
        <div>
            <h1>Money Management System</h1>
            <Balance transactions={transactions} />
            <div>
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </div>
            <Link to="/add">Add Transaction</Link>
        </div>
    );
};

export default Home;