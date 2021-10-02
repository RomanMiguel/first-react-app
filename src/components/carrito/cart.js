import { useContext } from "react";
import CarContext from "../context/cartContext";
import ItemCart from "./itemCart";
import { Link } from "react-router-dom";

const Car=()=>{
    const {carrito, clear, getTotal}= useContext(CarContext)

    if(carrito.length===0){
        return(<>
            <h3>No hay productos</h3>
            <Link to="/"> Volver al home</Link>
        </>)
    }
    
    return(<>
        <button onClick={()=>clear()}>Vaciar carrito</button>
        {carrito.map(e=><ItemCart item={e} />)}
        <h3>Total: {getTotal()}</h3>
    </>)
}
export default Car;