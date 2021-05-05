import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavBarElements';
import logo from'../assets/img/logo.png';

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={logo} alt='Corrupto' width='150px'/>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink href='#services' activeStyle>
                        Servicios
                    </NavLink>
                    <NavLink href='#portfolio' activeStyle>
                        Portafolio
                    </NavLink>
                    <NavLink href='#about' activeStyle>
                        Acerca de
                    </NavLink>
                    <NavLink href='#team' activeStyle>
                        Equipo
                    </NavLink>
                    <NavLink href='#contact' activeStyle>
                        Contacto
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/signin">
                            Iniciar Sesión
                        </NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    )
}

export default NavBar
