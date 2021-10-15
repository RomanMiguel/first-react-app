import Car from'./carrito/cartWidget'
import {NavLink, Link} from 'react-router-dom'
import { useContext, useState, useEffect } from 'react';
import CarContext from '../context/cartContext';
import UserContext from '../context/userContext';
import {categorias} from '../../services/firebase/firebase'

const NavBar= ()=>{
  const {getQuantity, clear}= useContext(CarContext)
  const [category, setCategory]= useState(undefined)
  const {user, logout}= useContext(UserContext)

  useEffect(()=>{
    categorias().then(categories=>{setCategory(categories)}).catch(error=>{
      console.log(error)
    })
  },[])

  const logoutAccion=()=>{
    logout()
    clear()
  }
  return (
    <nav className='navbar-dark bg-dark row'>
      <div className='d-flex justify-content-around col-8'>
        <Link to="/"> <button className="btn btn-dark">Home</button> </Link>
        {category?category.map(cat=>
          <NavLink key={cat.id} to= {"/category/"+ cat.idCategory} activeClassName="currentCategory" className="ext-white">
            <button className="btn btn-dark">{cat.category}</button>
          </NavLink>): <div className="text-white">Loading</div>
        }
      </div>
      
      <div className='d-flex justify-content-around col-4'>
        {user?<button className="btn btn-outline-danger col-5" onClick={logoutAccion}>logout</button>:<Link to="/login"><button className="btn btn-outline-success">login</button></Link>}
        {user?<div className="col-5 text-white">{user}</div>:""}
        {getQuantity()>0?<Link className="col-2"to ="/cart"><Car/></Link>:""}
      </div>
    </nav>
  );
}

export default NavBar;