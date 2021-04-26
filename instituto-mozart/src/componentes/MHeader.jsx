import React from 'react';
import Button from 'react-bootstrap/Button';

const MHeader = () => {
    return (
        <>
            <header 
            class="masthead">
                <div 
                class="container">
                    <div 
                    class="masthead-subheading">
                        Jardín de Niños Instituto Mozart
                    </div>
                    <div 
                    class="masthead-heading text-uppercase">
                        EDUCANDO CON CREATIVIDAD 
                    </div>
                    <Button
                        variant="primary"
                        size="lg"
                        className="text-uppercase js-scroll-trigger">
                            <a 
                                href="#">
                                    Tell Me More
                            </a>        
                    </Button>
                    
                </div>
            </header>
        </>
    )
}

export default MHeader
