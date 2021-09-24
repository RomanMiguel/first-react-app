import './item.css';
import {Link} from "react-router-dom"

const Item=({item})=>{
  if(!item){
    return<h1>Loading</h1>
  }

  return(
    <div key={item?.id} className="container-list">
      <Link to={"/item/"+item.id} >
        <h2>{item?.title}</h2>
      </Link>
      <div>
        <img src={item?.picture} className="imagen-art"/>
      </div>
      <h2>$ {item?.price}</h2>
    </div>
  )
}
export default Item;