import { GlobalContext } from "../context/Global";
import { useContext } from "react";
export default (props)=>{
    const {deleteAmounts} = useContext(GlobalContext);
    const sign = props.transaction.amount<0 ? '-': '+';
    return (
        <>
        <li className={props.transaction.amount< 0 ? 'minus' : 'plus'}>
            {props.transaction.text }<span>{sign}${Math.abs(props.transaction.amount)}</span><button onClick={() => deleteAmounts(props.transaction.id)} className="btn-del">x</button>
        </li>
        </>
    )
}