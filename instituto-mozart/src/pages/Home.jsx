import React from 'react';
import Actividades from '../components/Actividades';
import Header from '../components/Header';
import Identidad from '../components/Identidad';
import Contacto from '../components/Contacto';
import {makeStyles} from '@material-ui/core';
import Footer from '../components/Footer';
import Opiniones from '../components/Opiniones';
import Destacado from '../components/Destacado';
import musica from '../images/musica.jpg';
import nuevanorm from '../images/nuevanorm.jpg';
import deporte from '../images/deporte.jpg';

const useStyles = makeStyles(theme => ({
    tama:{
        flexGrow: 1
    },
}))

const Home = () => {

    const listaActividades = [
        {
            title: 'Música',
            caption: 'Videos',
            src: musica
        },
        {
            title: 'Recreación',
            caption: 'Ejercicios',
            src: nuevanorm
        },
        {
            title: 'Deporte',
            caption: 'Ejercicios',
            src: deporte
        },
        {
            title: 'Música',
            caption: 'Melodía',
            src: musica
        },
        {
            title: 'Recreación',
            caption: 'Videos de ejercicios',
            src: nuevanorm
        },
        {
            title: 'Deporte',
            caption: 'Teoría',
            src: deporte
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
