import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";


const initialState = {
    transactions: []
}

//creating golobalcontext with using createcontext

export const GlobalContext = createContext(initialState);

//creating provider component
export const OpenProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  
  //creating Actions for deleteing history and update reducer
  function deleteAmounts(id) {
    dispatch({
      type: "Delete_Amounts",
      payload: id,
    });
  }

//creating action for adding new transactions for every entry
  function addTransactions(transaction) {
    dispatch({
      type: "Add_Transaction",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteAmounts,
        addTransactions
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
