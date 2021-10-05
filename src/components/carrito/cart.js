import { useContext } from "react";
import CarContext from "../context/cartContext";
import ItemCart from "./itemCart";
import { Link } from "react-router-dom";
import UserContext from "../context/userContext";
import { db } from "../services/firebase/firebase";
import { collection, addDoc, getDoc, doc, Timestamp,writeBatch} from "@firebase/firestore";

const Car=()=>{
    const {carrito, clear, getTotal}= useContext(CarContext)
    const {user}= useContext(UserContext)
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
            total: getTotal(),
            date: Timestamp.fromDate(new Date())
        } 
        const batch = writeBatch(db)
        const sinStock = []

        Orden.items.forEach((element, i) => {
            getDoc(doc(db,'articulos',element.id)).then(DocumentSnapshot=>{
                if(DocumentSnapshot.data().stock>= Orden.items[i].quantity){
                    batch.update(doc(db, 'articulos', DocumentSnapshot.id), {
                        stock: DocumentSnapshot.data().stock - Orden.items[i].quantity
                    })
                }else{
                    sinStock.push({... DocumentSnapshot.data(), id: DocumentSnapshot.id})
                }
            })
        });

        if(sinStock.length === 0) {
            addDoc(collection(db, 'ordenes'), Orden).then(() => {
                batch.commit().then(() => {
                    alert('La orden se ejecuto con exito')
                })
            }).catch((error) => {
                alert('Error al ejecutar la orden', error)
            }).finally(() => {
                clear()
            })
        }
    }
    
    return(<>
        <button onClick={()=>clear()}>Vaciar carrito</button>
        <button onClick={() => confirmOrder()}>Confirmar Com pra</button>
        {carrito.map(e=><ItemCart item={e} />)}
        <h3>Total: {getTotal()}</h3>
    </>)
}
export default Car;