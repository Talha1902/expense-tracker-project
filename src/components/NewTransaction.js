import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../context/Global";

export default () => {
  let { addTransactions } = useContext(GlobalContext);


  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const formSubmit = (event)=> {
    event.preventDefault();

    //geting inputs from user and send it to global where it movies to tansactionlist component and add into history
    //and then also added into transaction conponents and update the list then moves to header component where current balance updates
    const NewTransaction = {
        id: Math.floor(Math.random() * 100000000), //generating a random id
        text: text,
        amount: +amount
    }
    addTransactions(NewTransaction);
  };
  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={formSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input
            type="text"
            placeholder="Enter descrption here"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount 
          </label><br/>(+value for Income || -value for Expense)
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};
