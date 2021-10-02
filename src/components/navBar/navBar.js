import './navBar.css';
import Car from'./carrito/cartWidget'
import {NavLink, Link} from 'react-router-dom'
import { useContext } from 'react';
import CarContext from '../context/cartContext';

const NavBar= ({art})=>{
  const {getQuantity}= useContext(CarContext)

  return (
    <nav className='navBar'>
      <div className='navOptionLeft'>
        <Link to="/">Home</Link>
        {art.map(cat=>
          <NavLink key={cat.id+"k"} to= {"/category/"+ cat.id} activeClassName="currentCategory" className="ext-white">
            {cat.category}
          </NavLink>
        )}
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