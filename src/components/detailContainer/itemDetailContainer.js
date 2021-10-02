import ItemDetail from './itemDetail'
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {db} from '../services/firebase/firebase'
import {doc, getDoc} from 'firebase/firestore'

function ItemDetailContainer() {
    const [element, setElement] = useState(undefined);
    const {id} = useParams();

    useEffect(()=>{
        getDoc(doc(db,'articulos',id)).then((QuerySnapshot)=>{
            const product={id: QuerySnapshot.id, ... QuerySnapshot.data()}
            setElement(product)
        }).catch((error)=>{console.log("error searching intems", error)})
    },[id])

    return(
        <div>
            <ItemDetail iten={element}/>
        </div>
    )
}
export default ItemDetailContainer;
