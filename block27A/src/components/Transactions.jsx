import React, { useState, useEffect } from "react";
import mockTransactions from "./MockData";
import "../styles/TransactionBar.css";

const TransactionBar = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(mockTransactions);
  }, []);

  return (
    <div className="transaction-bar">
      <h2>Recent Transactions</h2>
      <ul>
        {transactions.map((transaction) => {
          const amount = parseFloat(transaction.cost) || 0;

          return (
            <li
              key={transaction.txId}
              className={amount < 0 ? "negative" : "positive"}
            >
              <span>{transaction.user}</span>
              <span>{amount.toFixed(2)} USD</span> {/* Safely format amount */}
              <span>{transaction.date}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TransactionBar;
