import ItemDetail from './itemDetail'
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {articlebyId} from "../services/firebase/firebase"

function ItemDetailContainer() {
    const [element, setElement] = useState(undefined);
    const {id} = useParams();
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
        setLoading(true)
        articlebyId(id).then(prod=>{
            setElement(prod)})
        .catch((error)=>{console.log(error)})
        .finally(()=>{setLoading(false)})
    },[id])

    return(
        <div>
            {loading?"Loading": <ItemDetail iten={element}/>}
        </div>
    )
}
export default ItemDetailContainer;
