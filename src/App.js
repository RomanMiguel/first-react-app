import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/listContainer/itemListContainer';
import ItemDetailContainer from './components/detailContainer/itemDetailContainer';
import Car from './components/carrito/cart';
import { CartContextProvider } from './components/context/cartContext';
import Login from './components/login/login';

function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter> 
          <NavBar/>
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
            <Route path="/login">
              <Login />
            </Route>
          </Switch> 
        </BrowserRouter>  
      </CartContextProvider> 
    </div>
  );
}

export default App;
