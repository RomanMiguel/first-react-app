import './itemListContainer.css'
import ItemList from '../items/itemList';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router';
import {getProducts} from '../productos/productos'

const ItemListContainer= () =>{

    const [articulos, setListArt] = useState([]);
    const {id}= useParams();

    useEffect(()=>{
      const art= getProducts(id);
      art.then(list =>{
          setListArt(list)
      })
      return(()=>setListArt([]))
    },[id])

    if(articulos.length===0){
      return <h1>Loading</h1>
    }

    return(
        <div className="">
            <h2 className="titulo">Catalogo</h2>
            <ItemList items={articulos}/>
        </div>
    )
}

export default ItemListContainer;