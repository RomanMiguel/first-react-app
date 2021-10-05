import './navBar.css';
import Car from'./carrito/cartWidget'
import {NavLink, Link} from 'react-router-dom'
import { useContext, useState, useEffect } from 'react';
import CarContext from '../context/cartContext';
import UserContext from '../context/userContext';
import {categorias} from '../services/firebase/firebase'

const NavBar= ()=>{
  const {getQuantity}= useContext(CarContext)
  const [category, setCategory]= useState(undefined)
  const {user, logout}= useContext(UserContext)

  useEffect(()=>{
    categorias().then(categories=>{setCategory(categories)}).catch(error=>{
      console.log(error)
    })
  },[])
  return (
    <nav className='navBar'>
      <div className='navOptionLeft'>
        <Link to="/">Home</Link>
        {category?category.map(cat=>
          <NavLink key={cat.id} to= {"/category/"+ cat.idCategory} activeClassName="currentCategory" className="ext-white">
            {cat.category}
          </NavLink>
        ):""}
        {getQuantity()>0?<Link to ="/cart"><Car/></Link>:""}
      </div>
      
      <div className='navOptionRight'>
        {user?<button onClick={()=>logout()}>logout</button>:<Link to="/login"><button>login</button></Link>}
        {user?<div>{user}</div>:""}
      </div>
    </nav>
  );
}

export default NavBar;