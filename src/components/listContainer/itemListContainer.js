import './itemListContainer.css'
import ItemList from '../items/itemList';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router';
import {getDocs, collection, query, where} from "firebase/firestore"
import { db } from '../services/firebase/firebase';

const ItemListContainer= () =>{
    const [articulos, setListArt] = useState([]);
    const {id}= useParams();
    const [loading, setLoading]= useState(undefined);

    useEffect(()=>{
      if(!id){
        setLoading(true)
        getDocs(collection(db,'articulos')).then((querySnapshot)=>{
          const products= querySnapshot.docs.map(doc=>{
            return {id:doc.id, ... doc.data()}
          })
          setListArt(products)
        }).catch(error=>{console.log("error al traer los productos ")}).finally(() => {
          setLoading(false)
      })
      }
      else{
        setLoading(true)
        getDocs(query(collection(db,'articulos'),where('category','==',id))).then((querysnapshot)=>{
          const productsFilter= querysnapshot.docs.map(doc=>{
            return{id: doc.id, ... doc.data()}
          })
          setListArt(productsFilter)
        }).catch(error=>{console.log("error al traer los productos ")}).finally(() => {
          setLoading(false)
      })
      }
    },[id])

    return(
        <div className="">
            <h2 className="titulo">Catalogo</h2>
            {loading? "Loading":<ItemList items={articulos}/>}
        </div>
    )
}

export default ItemListContainer;