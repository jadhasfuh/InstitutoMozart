import React from 'react';
import Actividades from '../components/Actividades';
import Header from '../components/Header';
import Identidad from '../components/Identidad';
import Contacto from '../components/Contacto';
import {makeStyles} from '@material-ui/core';
import Footer from '../components/Footer';
import Opiniones from '../components/Opiniones';
import Destacado from '../components/Destacado';

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

        <div className = {classes.tama}>
            <Header />
            <Identidad />
            <Actividades listaActividades={listaActividades} />
            <Destacado/>
            <Opiniones/>
            <Contacto />
            <Footer />
        </div>
    )

}

export default Home
