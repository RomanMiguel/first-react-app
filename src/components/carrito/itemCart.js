import { useContext } from "react";
import CarContext from "../context/cartContext";

const ItemCart=({item})=>{
    const {removeItem}= useContext(CarContext)
    
    return(
    <div className="cart-detail mt-4">
        <div className="row">
            <div className="col-8">
                <h2>producto: {item.title}</h2>
                <h2>precio: {item.price}</h2>
                <h2>cantidad: {item.quantity}</h2>    
            </div>
            <div className="col-2 cont-button">
                <button className="btn btn-danger" onClick={()=>removeItem(item.id)}>eliminar</button>
            </div>
        </div>    
    </div>
    )
}

export default ItemCart;