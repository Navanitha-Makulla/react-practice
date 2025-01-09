export const fetchTransactions = async () => {
  const response = await fetch("/api/transactions");
  return response.json();
};

export const addTransaction = async (transaction) => {
  await fetch("/api/transactions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(transaction),
  });
};

export const editTransaction = async (transaction) => {
  await fetch(`/api/transactions/${transaction.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(transaction),
  });
};

export const deleteTransaction = async (id) => {
  await fetch(`/api/transactions/${id}`, { method: "DELETE" });
};
