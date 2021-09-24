import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/listContainer/itemListContainer';
import ItemDetailContainer from './components/detailContainer/itemDetailContainer';
import Car from './components/carrito/cart';

function App() {
  const Articulos= [
    {id: 0, category:"remeras"},
    {id: 1, category:"pantalones"},
    {id: 2, category:"zapatillas"}
  ];

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
