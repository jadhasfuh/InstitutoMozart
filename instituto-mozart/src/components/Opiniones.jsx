import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 450,
        [theme.breakpoints.down('md')]: {
            width: '300px',
        },
        maxHeight: 340,
        margin: '20px',
    },
    avatar: {
        backgroundColor: red[500],
    },
    typography: {
        marginTop: '50px',
        marginBottom: '20px'
    },
    parrafo: {
        textAlign: 'justify',
        height: '50px',
        width: '100%'
    }
}));

const opiniones = [
    {
        inicial: "L",
        comentario: "Excelente en todos sus aspectos, recomendado al 💯.",
        nombre: "Lalo Castañeda Hih",
        fecha: "26 de Agosto de 2019"
    },
    {
        inicial: "M",
        comentario: "La calidad que ofrece y los maestros son altamente especializados y capacitados.",
        nombre: "Mayra de Gomez",
        fecha: "14 de Marzo de 2019"
    },
    {
        inicial: "M",
        comentario: "Los creadores del instituto son personas altamente capacitadas y preparadas.",
        nombre: "Mariccela Murguía",
        fecha: "10 de Marzo de 2019"
    },
    {
        inicial: "A",
        comentario: "Excelente escuela!",
        nombre: "Adrián Ceja",
        fecha: "28 de Junio de 2021"
    }
]

const Opiniones = () => {

    const classes = useStyles();

    return (

        <Grid
            container
            alignItems='center'
            justify='center'
            direction='row'
            item
            xs={12}
        >
            <center>
                <Typography variant="h5" className={classes.typography}>
                    OPINIONES
                </Typography>
            </center>
            <Grid
                container
                item
                alignItems='center'
                justify='center'
                direction='row'
            >
                {opiniones.map(({ inicial, comentario, nombre, fecha }) =>
                    <Card
                        className={classes.root}
                        key={comentario + nombre}
                        elevation={1}
                    >

                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    {inicial}
                                </Avatar>
                            }
                            title={nombre}
                            subheader={fecha}
                        />
                        <CardContent>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                className={classes.parrafo}>
                                {comentario}
                            </Typography>
                        </CardContent>

                    </Card>
                )}
            </Grid>

        </Grid>

    )
}

export default Opiniones
