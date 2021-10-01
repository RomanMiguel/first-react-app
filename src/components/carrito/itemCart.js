import { useContext } from "react";
import CarContext from "../context/cartContext";

const ItemCart=({item})=>{
    const {removeItem}= useContext(CarContext)
    
    return(
    <div>
        <h2>producto: {item.title}</h2>
        <h2>precio: {item.price}</h2>
        <h2>cantidad: {item.quantity}</h2>
        <button onClick={()=>removeItem(item.id)}>X</button>
    </div>
    )
}

export default ItemCart;