import './itemDetail.css'
import ItemCount from '../counter/itemCount'
import { useState } from 'react'

const ItemDetail=({ iten })=> {
    const [cantidad, setCantidad]= useState();

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
            <ItemCount item={iten} cant={setCantidad}/>
        </div>
  </>
}
export default ItemDetail;