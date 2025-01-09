import React, { useState } from "react";

function AddTransaction({ onAdd }) {
  const [details, setDetails] = useState({ amount: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(details);
    setDetails({ amount: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={details.description}
        onChange={(e) =>
          setDetails({ ...details, description: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Amount"
        value={details.amount}
        onChange={(e) => setDetails({ ...details, amount: e.target.value })}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default AddTransaction;
