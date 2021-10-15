import { useContext } from "react";
import CarContext from "../../context/cartContext";
import cart from"./cart.svg"
const Car = () =>{
    const {getQuantity}= useContext(CarContext)

    return(
        <button>
            <img src={cart} className="carrito"/>
            {getQuantity()}
        </button>
    )
}

export default Car;