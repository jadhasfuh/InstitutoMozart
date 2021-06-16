import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <span className="copyright">
                            Jardín de Niños Institito Mozart 2021 &copy; 
                            </span>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="#something">
                                        <i className="fa fa-twitter"/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#something">
                                        <i className="fa fa-facebook-official"/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#something">
                                        <i className="fa fa-linkedin-in"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-inline quicklinks">
                                <li className="list-inline-item">
                                    <a href="#something">
                                        Priivacidad
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#something">
                                        Términos de Uso
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
