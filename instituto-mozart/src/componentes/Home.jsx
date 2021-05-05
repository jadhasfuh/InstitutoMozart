import React from 'react';
import Equipo from './Equipo';
import Actividades from './Actividades';
import Header from './Header';
import Identidad from './Identidad';
import Marcas from './Marcas';
import Contacto from './Contacto';
import Footer from './Footer';

const Home = () => {

    const listaActividades = [
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
            <Header />
            <Identidad />
            <Actividades listaActividades={listaActividades} />
            <Equipo />
            <Marcas/>
            <Contacto />
            <Footer />
        </>
    )

}

export default Home
