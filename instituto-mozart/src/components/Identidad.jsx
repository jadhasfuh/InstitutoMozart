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
        <div>

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
                    description="In velit incididunt elit incididunt est sint consequat excepteur ut.
                    Ipsum non aliquip laboris commodo quis.Esse non sunt qui est aute qui."
                    color={classes.orange}
                />
            </Grid>

        </div>

    )
}

export default Identidad