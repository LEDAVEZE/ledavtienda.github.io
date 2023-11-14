import Carrito from '../Carrito/Carrito.jsx';
import 'bulma/css/bulma.css';



const NavBar = () => {
    return <>
        <header>
                <nav className="hero is-link is-flex-direction-row is-justify-content-space-between">
                    <div className="hero-logo has-text-white">
                        <a>ARK-9 LOGO!!!</a>
                    </div>
                    <ul className="hero-menu is-flex is-justify-content-space-between ">
                        <li><a>INICIO</a></li>
                        <li><a>PRODUCTOS</a></li>
                        <li><a>CONTACTO</a></li>
                    </ul>
                    <div>
                    <Carrito> </Carrito>
                    </div>
                </nav>
        </header>
    </>
};

export default NavBar;