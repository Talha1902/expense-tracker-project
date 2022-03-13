import { GlobalContext } from "../context/Global"
import { useContext } from "react" // useContext u=is used to pull data from GlobalContext to this component
import Transaction from "./Transaction";


export default ()=>{
    const { transactions } = useContext(GlobalContext);
    
    return <>
    <h3>History</h3>
    <ul className="list">
        {transactions.map(transaction =>( <Transaction key={transaction.id} transaction={transaction} />))}
       
    </ul>    
    
    </>
}