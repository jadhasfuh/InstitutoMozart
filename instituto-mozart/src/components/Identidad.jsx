import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import ModalButton from './ModalButton';
import { green, blue, orange } from '@material-ui/core/colors';

const useClasses = makeStyles(theme => ({

    typography: {
        marginTop: '50px'
    },
    blue: {
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
        boxShadow: theme.shadows[3],
        width: theme.spacing(15),
        height: theme.spacing(15),
        cursor: 'pointer'
    },
    green: {
        color: '#fff',
        backgroundColor: green[500],
        boxShadow: theme.shadows[3],
        width: theme.spacing(15),
        height: theme.spacing(15),
        cursor: 'pointer'
    },
    orange: {
        color: '#fff',
        backgroundColor: orange[500],
        boxShadow: theme.shadows[3],
        width: theme.spacing(15),
        height: theme.spacing(15),
        cursor: 'pointer'
    }

}));

const Identidad = () => {

    const classes = useClasses();

    return (
        <Grid
            container
            item
            alignItems='center'
            justify='center'
            direction='column'
            xs={12}
        >

            <center>
                <Typography variant="h5" className={classes.typography}>
                    IDENTIDAD
                </Typography>
            </center>

            <Grid
                container
                alignItems='center'
                justify='center'
                direction='row'
            >
                <ModalButton
                    state="mision"
                    title="Misión"
                    description="Desarrollar las capacidades de los niños de nivel preescolar a través de un modelo
                    educativo transdisciplinario, que respete los ritmos y modos de aprendizaje de cada niño y que
                    potencilice sus capacidades naturales a través de procesos creativos."
                    color={classes.green}
                />
                <ModalButton
                    state="vision"
                    title="Visión"
                    description="Ser una institución innovadora, precursora de nuevas formas de trabajo en los
                    procesos de aprendizaje que permitan a los niños obtener su mayor nivel de desarrollo y crecer
                    de forma asertiva e integral."
                    color={classes.blue}
                />
                <ModalButton
                    state="valores"
                    title="Valores"
                    description={`Respeto: Para conducirnos con trato digno y amable con los integrantes de nuestra comunidad, reconociendo las diferencias individuales.
                    ~\nResponsabilidad: Para manejar con disciplina y compromiso nuestro quehacer de servicio, actuando con eficiencia y eficacia en las actividades educativas.
                    ~\nHonestidad: Al conducirnos con apego a la verdad y a nuestros principios personales e institucionales siendo coherentes en el decir y el hacer.`}
                    color={classes.orange}
                />
            </Grid>

        </Grid>

    )
}

export default Identidad