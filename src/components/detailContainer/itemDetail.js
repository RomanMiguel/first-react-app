import './itemDetail.css'
import ItemCount from '../counter/itemCount'
import { useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/userContext'

const ItemDetail=({ iten })=> {
    const [cantidad, setCantidad]= useState();
    const {user}= useContext(UserContext)

    if(!iten){
        return<h1>Loading</h1>
    }

    return <>
        <div className="container-list">
            <h2 key={iten?.id}>{iten?.title}</h2>
            <div>
                <img src={iten?.picture} className="imagen-art"/>
            </div>
            <p>{iten?.description}</p>
            <p>{iten?.stock} en Stock</p>
            <h2>$ {iten?.price}</h2>
            {user?<ItemCount item={iten} cant={setCantidad}/>:""}
            {user?<Link to='/cart'><button className="Button">Ir al carrito</button></Link>
            :<Link to='/login'><button className="Button">Login</button></Link>}
        </div>
  </>
}
export default ItemDetail;