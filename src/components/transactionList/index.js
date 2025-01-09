import React, { useEffect, useState } from "react";
import { fetchTransactions } from "../../services/api";

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("transactions");
    if (localData) {
      setTransactions(JSON.parse(localData));
    } else {
      fetchTransactions().then((data) => {
        setTransactions(data);
        localStorage.setItem("transactions", JSON.stringify(data));
      });
    }
  }, []);

  return (
    <ul>
      {transactions.map((t) => (
        <li key={t.id}>{`${t.description}: $${t.amount}`}</li>
      ))}
    </ul>
  );
}

export default TransactionList;
