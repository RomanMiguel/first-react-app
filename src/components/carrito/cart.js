import { useContext } from "react";
import CarContext from "../context/cartContext";
import ItemCart from "./itemCart";
import { Link } from "react-router-dom";
import UserContext from "../context/userContext";
import {sendOrder} from "../../services/firebase/firebase"
import { useHistory } from "react-router";
import './cart.css'

const Car=()=>{
    const {carrito, clear, getTotal}= useContext(CarContext)
    const {user}= useContext(UserContext)
    const History= useHistory();
    if(carrito.length===0){
        return(<>
            <h3>No hay productos</h3>
            <Link to="/"> Volver al home</Link>
        </>)
    }
    const confirmOrder=()=>{
        const Orden = {
            buyer: user,
            items: carrito,
            total: getTotal()
        } 
        sendOrder(Orden).then((msg)=>{alert("Gracias por tu compra. " + msg)})
        .catch((error)=>{console.log(error)})
        .finally(()=>{clear()})
        History.push("/")
    }
    
    return(
    <div className="cart-container">
        <div className="items-container col">
            {carrito.map(e=><ItemCart item={e} />)}
        </div>
        <div className="d-flex justify-content-evenly row">
            <button className="btn btn-danger col-4" onClick={()=>clear()}>Vaciar carrito</button>
            <button className="btn btn-success col-4" onClick={() => confirmOrder()}>Confirmar Compra</button>
            <h3 className="col-4">Total: {getTotal()}</h3>
        </div>
    </div>)
}
export default Car;