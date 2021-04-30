import React from 'react';
import About from './About';
import Equipo from './Equipo';
import Portafolio from './Portafolio';
import Header from './Header';
import Servicios from './Servicios';
import Marcas from './Marcas';
import Contacto from './Contacto';
import Footer from './Footer';

const Home = () => {

    const portfolioLinks = [
        {
          title: 'Ejecicios de lectura',
          caption: 'Videos'
        },
        {
          title: 'Partituras',
          caption: 'Ejercicios'
        },
        {
          title: 'Teoría',
          caption: 'Ejercicios'
        },
        {
          title: 'Canciones',
          caption: 'Melodía'
        },
        {
          title: 'Armonización',
          caption: 'Videos de ejercicios'
        },
        {
          title: 'Instrumentos',
          caption: 'Teoría'
        }
      ]

    return (
        <>
            <Header/>
            <Servicios/>
            <Portafolio portfolioLinks={portfolioLinks}/>
            <About/>
            <Equipo/>
            <Marcas/>
            <Contacto/>
            <Footer/>
        </>
    )
}

export default Home
