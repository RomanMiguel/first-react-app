import { useState } from "react";
import './itemCount.css'
import { Link } from 'react-router-dom'

const ItemCount= (props)=>{
    const[count, setCount]= useState(1)
    const onAddProduct=()=>props.onadd(count)
    
    return(
        <div className='containerCount'>
            <div className='row containerButtons'>
                <button className='col-3' onClick={()=>count>1?setCount(count-1):''}>-</button>
                <div className='col-6'>{count}</div>
                <button className='col-3' onClick={()=>count<props.max?setCount(count+1):''}>+</button>
            </div>

            <Link to={props.url}>
                <button onClick={onAddProduct} className='btn btn-success'>Agregar al carrito</button>
            </Link>
        </div>
    )
}
export default ItemCount;