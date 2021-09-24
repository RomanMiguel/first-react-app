import './itemListContainer.css'
import ItemList from '../items/itemList';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router';

const Articulos= [{
    id: "0",
    title: 'remera jordan nike',
    category:"remeras",
    price: 2500,
    picture:'https://www.digitalsport.com.ar/files/products/60ca64b59941b-516531-500x500.jpg'
},{
  id: "1",
  title: 'jean Levis 505 Regular Fit Dark Stone Wash',
  price: 7600,
  category:"pantalones",
  picture:'https://http2.mlstatic.com/D_NQ_NP_972800-MLA45342820640_032021-O.webp'
},{
  id: "2",
  title: 'Zapatillas Air Jordan 1 Mid Se Purple Basket Retro',
  price: 37499,
  category:"zapatillas",
  picture:'https://http2.mlstatic.com/D_NQ_NP_680357-MLA47259735801_082021-O.webp'
}];

const Item = () => {
  return new Promise((resolve, rejetc) => {
    setTimeout(() => {
      resolve(Articulos);
    }, 2000);
  });
};

const ItemListContainer= () =>{

    const [articulos, setListArt] = useState([]);
    const {id}= useParams();

    useEffect(()=>{
      const art= Item();
      if(id){
        art.then(productos=>{
          const filtro= productos.filter(s=>s.id=== id)
          setListArt(filtro)
        })
      }else{
        art.then(list =>{
          setListArt(list)
        })
      }
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