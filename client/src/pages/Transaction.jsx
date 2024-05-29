import React from "react";

const Transaction = ({ transaction }) => {
    return (
        <div>
            <h3>{transaction.name}</h3>
            <p>{transaction.amount > 0 ? '+' : ''}{transaction.amount}</p>
        </div>
    );
};

export default Transaction;