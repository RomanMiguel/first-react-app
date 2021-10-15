import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/listContainer/itemListContainer';
import ItemDetailContainer from './components/detailContainer/itemDetailContainer';
import Car from './components/carrito/cart';
import { CartContextProvider } from './components/context/cartContext';
import Login from './components/login/login';
import Footer from './components/footer/footer';

function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter> 
          <NavBar/>
          <Switch>
            <Route exact path="/" component={ItemListContainer}/>
            <Route path="/category/:id" component={ItemListContainer}/> 
            <Route path="/item/:id" component={ItemDetailContainer}/>
            <Route path="/cart" component={Car}/>
            <Route path="/login"component={Login}/>
          </Switch> 
          <Footer />
        </BrowserRouter>  
      </CartContextProvider> 
    </div>
  );
}

export default App;
