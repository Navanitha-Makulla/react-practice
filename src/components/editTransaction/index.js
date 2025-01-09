import React, { useState } from "react";

function EditTransaction({ transaction, onEdit }) {
  const [details, setDetails] = useState(transaction);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(details);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={details.description}
        onChange={(e) =>
          setDetails({ ...details, description: e.target.value })
        }
      />
      <input
        type="number"
        value={details.amount}
        onChange={(e) => setDetails({ ...details, amount: e.target.value })}
      />
      <button type="submit">Edit Transaction</button>
    </form>
  );
}

export default EditTransaction;
