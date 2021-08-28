import { Navbar, Icon, NavItem, Button} from 'react-materialize';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import MaterialIcon, {colorPalette} from 'material-icons-react';

const Menu = ()=>{
  return <Navbar
        alignLinks="right"
        brand={<a className="brand-logo" href="#"><CartWidget/></a>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}>
        <Link to={"/"}>Inicio</Link>
        <Link to={"/productos"}>Productos</Link>
        <Link to={"/nosotros"}>Nosotros</Link>
        <Button
          floating
          icon={<MaterialIcon icon="shopping_cart" />}
          large
          node="button"
          waves="light"/>
      </Navbar>;
      }

export default Menu;
