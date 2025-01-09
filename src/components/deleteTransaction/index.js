import React from "react";

function DeleteTransaction({ transactionId, onDelete }) {
  return (
    <button onClick={() => onDelete(transactionId)}>Delete Transaction</button>
  );
}

export default DeleteTransaction;
