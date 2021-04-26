import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/styles.css';

const MNavBar = () => {
    return (
        <div className="page-top">
            <Navbar
                expand="lg"
                variant="dark"
                fixed="top"
                id="mainNav">
                <Container>
                    <Navbar.Brand>
                        <a
                            href="#page-top"
                            className="js-scroll-trigger">
                            <img
                                src={logo}
                                alt="Corrupto"
                            />
                        </a>
                        <Button
                            class="navbar-toggler navbar-toggler-right"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarResponsive"
                            aria-controls="navbarResponsive"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            Menu
                            <i class="fas fa-bars ml-1"></i>
                        </Button>
                        <Navbar.Collapse 
                            id="navbarResponsive">
                            <Nav
                                class="text-uppercase ml-auto">
                                <Nav.Link 
                                    className="js-scroll-trigger" 
                                    href="#inicio">
                                        Inicio
                                </Nav.Link>
                                <Nav.Link 
                                    className="js-scroll-trigger" 
                                    href="#nosotros">
                                        Nosotros
                                </Nav.Link>
                                <Nav.Link 
                                    className="js-scroll-trigger" 
                                    href="#profesores">
                                        Profesores
                                </Nav.Link>
                                <Nav.Link 
                                    className="js-scroll-trigger" 
                                    href="#instalaciones">
                                        Instalaciones
                                </Nav.Link>
                                <Nav.Link 
                                    className="js-scroll-trigger" 
                                    href="#contacto">
                                        Contacto
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default MNavBar