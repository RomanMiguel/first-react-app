import './itemListContainer.css'
import ItemList from '../items/itemList';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { getArticles } from '../services/firebase/firebase';

const ItemListContainer= () =>{
    const [articulos, setListArt] = useState([]);
    const {id}= useParams();
    const [loading, setLoading]= useState(undefined);

    useEffect(()=>{
        setLoading(true)
        getArticles("category","==",id).then(articles=>{
          setListArt(articles)
        }).catch((error)=>{console.log(error)
        }).finally(() => {
          setLoading(false)
        })
    },[id])

    return(
        <div className="container">
            <h2 className="titulo">Catalogo</h2>
            {loading? "Loading":<ItemList items={articulos}/>}
        </div>
    )
}

export default ItemListContainer;