import './itemDetail.css'
import ItemCount from '../counter/itemCount'
import { useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/userContext'

const ItemDetail=({ iten })=> {
    const {user}= useContext(UserContext)

    if(!iten){
        return<h1>Loading</h1>
    }

    return <>
        <div className="detail-list">
            <h1 key={iten?.id}>{iten?.title}</h1>
            <div className="row">
                <div className="col-5">
                    <img src={iten?.picture} className="imagen-art"/>
                </div>
                <div className="col-7">
                    <p>{iten?.description}</p>
                    <p>{iten?.stock} en Stock</p>
                    <h2>$ {iten?.price}</h2>
                    {user?<ItemCount item={iten}/>:""}
                    {user?<Link to='/cart'><button className="btn btn-secondary">Ir al carrito</button></Link>
                    :<Link to='/login'><button className="btn btn-success">Login</button></Link>}
                </div>
            </div>
        </div>
  </>
}
export default ItemDetail;