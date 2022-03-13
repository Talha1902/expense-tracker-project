import { GlobalContext } from "../context/Global"
import { useContext } from "react";


export default ()=>{
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((amm,item)=> (amm += item), 0).toFixed(2);
    return(
        <>
        
        <h2>
            Expense Tracker App by Talha
        </h2>


        <h4 className="balance">Your Balance </h4>
        <h1>${total}</h1>
        </>
    )
}