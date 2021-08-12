import { Navbar, Icon, NavItem } from 'react-materialize';
import logo from './images/logo.png'
import CartWidget from './CartWidget/CartWidget';

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
        <NavItem href="">Inicio</NavItem>
        <NavItem href="">Productos</NavItem>
        <NavItem href="">Nosotros</NavItem>
      </Navbar>;
      }

export default Menu;
