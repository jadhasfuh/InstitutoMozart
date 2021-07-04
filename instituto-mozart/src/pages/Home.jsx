import React from 'react';
import Actividades from '../components/Actividades';
import Header from '../components/Header';
import Identidad from '../components/Identidad';
import Contacto from '../components/Contacto';
import { makeStyles, Grid } from '@material-ui/core';
import Footer from '../components/Footer';
import Opiniones from '../components/Opiniones';
import Destacado from '../components/Destacado';
import cocina from '../images/cocina.jpg';
import deporte from '../images/deporte.jpg';
import festivales from '../images/festivales.jpg';
import tradiciones from '../images/tradiciones.jpg';
import civicos from '../images/civicos.jpg';
import visitas from '../images/visitas.jpg';
import musica from '../images/musica.jpg';

const useStyles = makeStyles(theme => ({
    tama: {
        flexGrow: 1
    },
}))

const Home = () => {

    const listaActividades = [
        {
            title: 'Cocina',
            caption: '¡Taller de cocina, con nuestros pequeños!',
            src: cocina
        },
        {
            title: 'Deportes',
            caption: 'Educación física, bicipaseos, festivales, entre otras.',
            src: deporte
        },
        {
            title: 'Musica',
            caption: 'Taller de iniciación musical.',
            src: musica
        },
        {
            title: 'Eventos Cívicos',
            caption: 'Participación en eventos municipales.',
            src: civicos
        },
        {
            title: 'Visitas guiadas',
            caption: 'Las visitas ponen a los alumnos en contacto con la realidad misma.',
            src: visitas
        },
        {
            title: 'Festivales',
            caption: 'Una de las mas bellas cualidades de la verdadera amistad, es entender y ser entendido.',
            src: festivales
        },
        {
            title: 'Tradiciones',
            caption: 'Manteniendo vivas nuestras tradiciones con nuestros pequeños.',
            src: tradiciones
        }
    ];

    const classes = useStyles();

    return (

            <Grid
                className={classes.tama}
                container
                item
                alignItems='center'
                justify='center'
                direction='row'
                xs = {12}
            >
                <Header />
                <Identidad />
                <Actividades listaActividades={listaActividades} />
                <Destacado />
                <Opiniones />
                <Contacto />
                <Footer />
            </Grid>
    )

}

export default Home
