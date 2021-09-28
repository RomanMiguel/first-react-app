import { useContext } from "react";
import CarContext from "../context/cartContext";

const Car=()=>{
    const {carrito}= useContext(CarContext)
    {carrito.map(e=>{
        return <h2>e.title</h2>
    })}
}
export default Car;