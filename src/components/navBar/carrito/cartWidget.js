import { useContext } from "react";
import CarContext, { CartContextProvider } from "../../context/cartContext";
import "../carrito/cars.css"

const Car = () =>{
    const {getQuantity}= useContext(CarContext)

    return(
        <button>
            <img className="imagen" src="cart.svg " className="carrito"/>
            {getQuantity()}
        </button>
    )
}

export default Car;