import './item.css';
import {Link} from "react-router-dom"

const Item=({item})=>{
  if(!item){
    return<h1>Loading</h1>
  }

  return(
    <div key={item?.id} className="block col-3">
      <h2>{item?.title}</h2>
      <div>
        <img src={item?.picture} className="imagen-art"/>
      </div>
      <h2>$ {item?.price}</h2>
      <Link to={"/item/"+item.id} >
        <button>Ver detalles</button>
      </Link>
    </div>
  )
}
export default Item;