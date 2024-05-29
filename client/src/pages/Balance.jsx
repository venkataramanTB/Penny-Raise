import React from "react";

const Balance = ({ transactions }) => {
    const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

    return (
        <div>
            <h2>Your Balance</h2>
            <p>{total}</p>
        </div>
    );
};

export default Balance;