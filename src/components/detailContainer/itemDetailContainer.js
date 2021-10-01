import ItemDetail from './itemDetail'
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../productos/productos';

function ItemDetailContainer() {
    const [element, setElement] = useState(undefined);
    const {id} = useParams();

    useEffect(()=>{
        const art= getProductDetail(id);
        art.then(list => setElement(list))
    },[id])

    return(
        <div>
            <ItemDetail iten={element}/>
        </div>
    )
}
export default ItemDetailContainer;
