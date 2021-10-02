import { Link } from "react-router-dom"
import { useContext } from "react";
import CarContext from "../../context/cartContext";

const Car = () =>{
    const {getQuantity}= useContext(CarContext)

    return(
        <button>
            <img src="./carrito.svg" className="carrito"/>
            {getQuantity()}
        </button>
    )
}

export default Car;