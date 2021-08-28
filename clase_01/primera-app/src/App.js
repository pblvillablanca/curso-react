import Menu from './componentes/Menu/Menu';
import ItemListContainer from './componentes/Container/ItemListContainer';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import ItemDetail from './componentes/ItemDetail/ItemDetail';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Menu/>
         <Switch>
            <Route exact path="/">
                <ItemListContainer/>
            </Route>
            <Route exact path="/detalle/:id">
                <ItemDetailContainer />
            </Route>
            <Route exact path="/productos">
                <ItemListContainer />
            </Route>
            <Route exact path="/nosotros">
                  <h3>Nosotros</h3>
            </Route>
         </Switch>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
