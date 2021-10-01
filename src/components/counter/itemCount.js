import { useState, useContext, useEffect} from "react";
import './itemCount.css'
import { Link } from 'react-router-dom'
import CarContext from "../context/cartContext";

const ItemCount= ({item, cant})=>{
    const[count, setCount]= useState(1)
    const {addItem, isInCar, getProduct}= useContext(CarContext)
    
    useEffect(() => {
        if(isInCar(item.id)) {
           const oldQuantity = getProduct(item.id)?.quantity
           setCount(oldQuantity)
        }
    },[])
    const onAddProduct=()=>{
        addItem(item,count)
        cant(count)
    }
    
    return(
        <div className='containerCount'>
            <div className='row containerButtons'>
                <button className='col-3' onClick={()=>count>1?setCount(count-1):''}>-</button>
                <div className='col-6'>{count}</div>
                <button className='col-3' onClick={()=>count<item.stock?setCount(count+1):''}>+</button>
            </div>

            <Link to="/cart">
                <button onClick={onAddProduct} className='btn btn-success'>Agregar al carrito</button>
            </Link>
        </div>
    )
}
export default ItemCount;