import './navBar.css';
import Car from'./carrito/cartWidget'
import {NavLink, Link} from 'react-router-dom'

const navBar= ({art})=>{
  return (
    <nav className='navBar'>
      <div className='navOptionLeft'>
        <Link to="/">
          Home
        </Link>
        {art.map(cat=>
          <NavLink key={cat.id+"k"} to= {"/category/"+ cat.id} activeClassName="currentCategory" className="ext-white">
            {cat.category}
          </NavLink>
        )}
        <Car/>
      </div>

      <div className='navOptionRight'>
        <button>iniciar</button>
        <button>registrarse</button>
      </div>
    </nav>
  );
}

export default navBar;