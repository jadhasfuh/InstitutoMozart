import React from 'react';
import Equipo from './Equipo';
import Actividades from './Actividades';
import Header from './Header';
import Identidad from './Identidad';
import Marcas from './Marcas';
import Contacto from './Contacto';
import Footer from './Footer';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    tama:{
        flexGrow: 1
    },
}))

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
    ];

    const classes = useStyles();

    return (

        <div className = {classes.tama} >
            <Header />
            <Identidad />
            <Actividades listaActividades={listaActividades} />
            <Equipo />
            <Marcas/>
            <Contacto />
            <Footer />
        </div>
    )

}

export default Home
