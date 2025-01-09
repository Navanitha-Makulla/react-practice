import "./App.css";
import AddTransaction from "./components/addTransaction";
import TransactionList from "./components/transactionList";

function App() {
  return (
    <div>
      <h1>Transaction Manager</h1>
      <AddTransaction onAdd={(details) => console.log(details)} />
      <TransactionList />
    </div>
  );
}

export default App;
