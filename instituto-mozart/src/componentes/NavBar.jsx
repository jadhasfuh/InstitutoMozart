import React, { useState } from 'react'
import { FiXCircle } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import logo from '../assets/img/logo.png';
import styled from 'styled-components';
import { IoLogIn } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const NavLink2 = styled.a`
        color: #fff;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0 1rem;
        height: 100%;
        cursor: pointer;
        &.active {
            color: #15cdfc;
        }
    `;

    const NavBtnLink = styled(NavLink)`
        border-radius: 4px;
        background: #black;
        color: #fff;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        margin-left: 24px;
    `;

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };
    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push('menuq2');
    } else {
        boxClass.push('');
    }
    return (
        <header className="header__middle">
            <div className="container">
                <div className="row">
                    <div className="header__middle__logo">
                        <NavLink exact activeClassName='is-active' to="/">
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>
                    <div className="header__middle__menus">
                        <nav className="main-nav" >
                            {isResponsiveclose === true ?
                                <>
                                    <span
                                        className="menubar__button"
                                        style={{ display: 'none' }}
                                        onClick={toggleClass} >
                                        <FiXCircle />
                                    </span>
                                </>
                                :
                                <>
                                    <span
                                        className="menubar__button"
                                        style={{ display: 'none' }}
                                        onClick={toggleClass} >
                                        <FaBars  />
                                    </span>
                                </>
                            }
                            <ul className={boxClass.join(' ')}>

                                <li className="menu-item" >
                                    <NavLink
                                        exact
                                        activeClassName='is-active'
                                        onClick={toggleClass}
                                        to={`/`}
                                        href="/">
                                        Inicio
                                    </NavLink>
                                </li>

                                <li className="menu-item " >
                                    <NavLink2
                                        onClick={toggleClass}
                                        activeClassName='is-active'
                                        href="#identidad">
                                        Identidad
                                    </NavLink2>
                                </li>
                        
                                <li className="menu-item " >
                                    <NavLink2
                                        onClick={toggleClass}
                                        activeClassName='is-active'
                                        href="#portfolio">
                                        Actividades
                                    </NavLink2>
                                </li>

                                <li className="menu-item " >
                                    <NavLink2
                                        onClick={toggleClass}
                                        activeClassName='is-active'
                                        href="#team">
                                        Profesores
                                    </NavLink2>
                                </li>

                                <li className="menu-item " >
                                    <NavLink2
                                        onClick={toggleClass}
                                        activeClassName='is-active'
                                        href="#contact">
                                        Contacto
                                    </NavLink2>
                                </li>

                                <li className="menu-item " >
                                        <NavBtnLink 
                                            onClick={toggleClass}
                                            activeClassName='is-active'
                                            to={`/signin`}>
                                                <h2><IoLogIn/></h2>
                                        </NavBtnLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar