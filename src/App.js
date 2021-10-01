import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/listContainer/itemListContainer';
import ItemDetailContainer from './components/detailContainer/itemDetailContainer';
import Car from './components/carrito/cart';
import { CartContextProvider } from './components/context/cartContext';
import {getProdCat} from './components/productos/productos'

function App() {
  const Articulos= getProdCat();

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter> 
          <NavBar art={Articulos}/>
          <Switch>
            <Route exact path="/"> 
              <ItemListContainer />
            </Route> 
            <Route path="/category/:id"> 
              <ItemListContainer />
            </Route> 
            <Route path="/item/:id"> 
              <ItemDetailContainer />
            </Route>
            <Route path="/cart"> 
              <Car />
            </Route>
          </Switch> 
        </BrowserRouter>  
      </CartContextProvider> 
    </div>
  );
}

export default App;
