import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <span className="copyright">
                                Copyright &copy; Your Website 2019
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
                                        <i className="fa fa-facebook-f"/>
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
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#something">
                                        Terms of Use
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
