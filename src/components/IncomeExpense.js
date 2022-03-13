import { GlobalContext } from "../context/Global";
import { useContext } from "react";
export default ()=>{
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(item => item > 0).reduce((amm,item)=> (amm += item),0).toFixed(2);
    const expense =  amounts.filter(item => item < 0).reduce((amm,item)=> (amm += item),0).toFixed(2);
    return<>
    <div className="incomeBox">
    <div>
        <h4>INCOME</h4>
        <p className="money plus">${income}</p>
    </div>
    <hr />
    <div>
        <h4>EXPENSE</h4>
        <p className="money minus">${expense}</p>
    </div>
    </div>
    
    </>
}