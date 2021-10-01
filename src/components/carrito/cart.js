import { useContext } from "react";
import CarContext from "../context/cartContext";
import ItemCart from "./itemCart";

const Car=()=>{
    const {carrito, clear}= useContext(CarContext)

    if(carrito.length===0){
        return <h3>No hay productos</h3>
    }
    
    return(<>
        <button onClick={()=>clear()}>Vaciar carrito</button>
        {carrito.map(e=><ItemCart item={e} />)}
    </>)
}
export default Car;