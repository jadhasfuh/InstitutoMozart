import React from 'react'
import logo from '../assets/img/logo.png'

const Header = () => {
    return (
        <header className="masthead">
            <div className="container">
                <div className="intro-text">
                    <div className="intro-lead-in"><img src={logo} alt="Corrupto" id="HLogo" /></div>
                    <div className="intro-heading text-uppercase">Educar con creatividad</div>
                    <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Saber más</a>
                </div>
            </div>
        </header>
    )
}

export default Header