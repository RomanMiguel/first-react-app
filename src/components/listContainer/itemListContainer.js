import './itemListContainer.css'
import ItemList from '../items/itemList';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router';
import {getDocs, collection, query, where} from "firebase/firestore"
import { db } from '../services/firebase/firebase';

const ItemListContainer= () =>{

    const [articulos, setListArt] = useState([]);
    const {id}= useParams();

    useEffect(()=>{
      if(!id){
        getDocs(collection(db,'articulos')).then((querySnapshot)=>{
          const products= querySnapshot.docs.map(doc=>{
            return {id:doc.id, ... doc.data()}
          })
          setListArt(products)
        }).catch(error=>{console.log("error al traer los productos ")})
      }
      else{
        getDocs(query(collection(db,'articulos'),where('category','==',id))).then((querysnapshot)=>{
          const productsFilter= querysnapshot.docs.map(doc=>{
            return{id: doc.id, ... doc.data()}
          })
          setListArt(productsFilter)
        }).catch(error=>{console.log("error al traer los productos ")})
      }
    
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