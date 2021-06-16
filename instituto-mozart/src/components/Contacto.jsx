import React from 'react'

const Contacto = () => {
    return (
        <div>
            <section className="page-section" 
                     id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">
                                ¡Contactanos!
                            </h2>
                            <h3 className="section-subheading text-muted">
                                Escribenos un mensaje
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <form id="contactForm" 
                                 name="sentMessage" 
                                 noValidate="novalidate">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input className="form-control" 
                                                id="name" type="text" 
                                                placeholder="Tu nombre *" 
                                                required="required" 
                                                data-validation-required-message="Por favor escribe tu nombre." />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" 
                                                   id="email" 
                                                   type="email" 
                                                   placeholder="Tu Email *" 
                                                   required="required" 
                                                   data-validation-required-message="Por favor ingresa tu email." />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" 
                                                   id="phone" 
                                                   type="tel" 
                                                   placeholder="Tu teléfono *" 
                                                   required="required" 
                                                   data-validation-required-message="Por favor ingresa tu número de teléfono." />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <textarea className="form-control" 
                                                      id="message" 
                                                      placeholder="Tu mensaje *" 
                                                      required="required" 
                                                      data-validation-required-message="Por favor escribe el mensaje."/>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="col-lg-12 text-center">
                                        <div id="success"></div>
                                        <button id="sendMessageButton" 
                                                className="btn btn-primary btn-xl text-uppercase"
                                                type="submit">
                                                    Enviar mensaje
                                                </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contacto
