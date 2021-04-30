import React from 'react'

const Marcas = () => {
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <a href="#something">
                                <img className="img-fluid d-block mx-auto" 
                                     src="img/logos/envato.jpg"
                                     alt="Corrupto" />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <a href="#something">
                                <img className="img-fluid d-block mx-auto" 
                                src="img/logos/designmodo.jpg" 
                                alt="Corrupto" />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <a href="#something">
                                <img className="img-fluid d-block mx-auto" 
                                     src="img/logos/themeforest.jpg" 
                                     alt="Corrupto" />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <a href="#something">
                                <img className="img-fluid d-block mx-auto" 
                                     src="img/logos/creative-market.jpg" 
                                     alt="Corrupto" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Marcas
