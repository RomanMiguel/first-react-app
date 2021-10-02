import './navBar.css';
import Car from'./carrito/cartWidget'
import {NavLink, Link} from 'react-router-dom'
import { useContext, useState } from 'react';
import CarContext from '../context/cartContext';
import { useEffect } from 'react';
import { db } from '../services/firebase/firebase';
import { getDocs, collection} from '@firebase/firestore';
const NavBar= ()=>{
  const {getQuantity}= useContext(CarContext)
  const [category, setCategory]= useState(undefined)

  useEffect(()=>{
    getDocs(collection(db,'categorias')).then((QuerySnapshot)=>{
      const cat= QuerySnapshot.docs.map(doc=>{
        return{id:doc.id, ... doc.data()}
      })
      setCategory(cat)
    })
  },[])
  console.log(category)
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
        <button>iniciar</button>
        <button>registrarse</button>
      </div>
    </nav>
  );
}

export default NavBar;