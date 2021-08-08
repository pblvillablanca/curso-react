import Menu from './componentes/Menu/Menu';
import ItemListContainer from './componentes/Container/ItemListContainer';

function App() {
  return (
    <div className="App">
        <Menu/>
        <ItemListContainer msgInicio="Bienvenidos a nuestra tienda On-Line"/>
    </div>
  );
}

export default App;
