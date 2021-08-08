import { Navbar, Icon, NavItem } from 'react-materialize';
import logo from './images/logo.png'

const Menu = ()=>{
  return <Navbar
        alignLinks="right"
        brand={<a className="brand-logo" href="#"><img className="materialboxed" width="100" height="60" src={logo} /></a>}
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
