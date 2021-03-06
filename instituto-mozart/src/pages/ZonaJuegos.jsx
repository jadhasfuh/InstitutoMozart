import React, { useState, useEffect } from 'react'
import { makeStyles, Typography, Grid, Paper, Avatar } from '@material-ui/core';
import { green, blue, orange, red } from '@material-ui/core/colors';
import BounceLoader from "react-spinners/BounceLoader";
import { useHistory } from "react-router-dom";
import '../gobalVariables';
import { IconContext } from 'react-icons';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import cono from '../images/cono.png';

const useStyles = makeStyles((theme) => ({

    green: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
        boxShadow: theme.shadows[3],
        width: theme.spacing(15),
        height: theme.spacing(15),
        cursor: 'pointer'
    },
    blue: {
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
        boxShadow: theme.shadows[3],
        width: theme.spacing(15),
        height: theme.spacing(15),
        cursor: 'pointer'
    },
    orange: {
        backgroundColor: orange[500],
        boxShadow: theme.shadows[3],
        width: theme.spacing(15),
        height: theme.spacing(15),
        cursor: 'pointer'
    },
    red: {
        backgroundColor: red[500],
        boxShadow: theme.shadows[3],
        width: theme.spacing(15),
        height: theme.spacing(15),
        cursor: 'pointer'
    },
    paper: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    root: {
        flexGrow: 1
    },
    typography: {
        marginTop: '100px',
        marginBottom: '30px',
        fontSize: '50px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '40px'
        },
        textAlign: 'center',
        flexGrow: 1
    },
    imagen: {
        width: '40%',
        margin: '0 auto'
    }

}));

const ZonaJuegos = () => {

    //ESTILOS
    const classes = useStyles();

    //HISTORY PARA ROUTER
    const historial = useHistory();

    const juegos = [
        /*
        {
            clase: classes.blue,
            juego: "https://arbolabcgames.top/L4A/",
            titulo: "VOCALES",
        },
        {
            clase: classes.blue,
            juego: "https://arbolabcgames.top/E14A/",
            titulo: "INGLES",
        },
        {
            clase: classes.orange,
            juego: "https://arbolabcgames.top/M10A/",
            titulo: "N??MEROS",
        },
        {
            clase: classes.orange,
            juego: "https://arbolabcgames.top/M1A/",
            titulo: "FIGURAS",
        },
        {
            clase: classes.green,
            juego: "https://arbolabcgames.top/PuzzleDinosaurios/",
            titulo: "PUZZLE",
        },
        {
            clase: classes.green,
            juego: "https://arbolabcgames.top/memoria-animales-salvajes/",
            titulo: "MEMORAMA",
        },
        {
            clase: classes.green,
            juego: "https://arbolabcgames.top/F18ABC/",
            titulo: "COLOREAR",
        },
        {
            clase: classes.red,
            juego: "https://arbolabcgames.top/Tiro_libre/game/index.html",
            titulo: "FUTBOL",
        }
        */

    ];

    //PANTALLA DE CARGA
    const [carga, setCarga] = useState(false);
    useEffect(() => {
        // clean up controller
        let isSubscribed = true;
        setCarga(true && isSubscribed);
        setTimeout(() => {
            setCarga(false);
        }, 500)
        // cancel subscription to useEffect
        return () => (isSubscribed = false);
    }, []);

    return (
        <Grid
            xs={12}
            item
            container
            alignItems='center'
            justify='center'
            direction='row'
            className={classes.root}
        >
            {
                carga ?
                    (
                        <BounceLoader
                            css={`
                                    display: block;
                                    margin: 0 auto;
                                    margin-top: 30vh;
                                    border-color: red;
                                    `}
                            size={100}
                            loading={carga}
                            color={blue[500]}
                        />
                    )
                    :
                    (
                        <Grid
                            container
                            item
                            alignItems='center'
                            justify='center'
                            direction='column'
                            xs={12}
                            className={classes.root}
                        >
                            <Grid
                                container
                                item
                                alignItems='center'
                                justify='center'
                                direction='row'
                                xs={12}
                                spacing={5}
                            >
                                {
                                    juegos.length > 0 ? (
                                        juegos.map(({ clase, juego, titulo }) =>
                                            <Paper
                                                className={classes.paper}
                                                elevation={0}
                                                key={titulo}
                                            >
                                                <Avatar
                                                    className={clase}
                                                    onClick={
                                                        () => {
                                                            global.url = juego
                                                            historial.replace('/game');
                                                        }
                                                    }
                                                >
                                                    <IconContext.Provider value={{ fontSize: '6em' }}>
                                                        <SportsEsportsIcon />
                                                    </IconContext.Provider>
                                                </Avatar> <br />
                                                <Typography>{titulo}</Typography>
                                            </Paper>
                                        )
                                    ) : (
                                        <Grid
                                            container
                                            item
                                            alignItems='center'
                                            justify='center'
                                            direction='row'
                                            xs={12}
                                        >
                                            <Typography className={classes.typography}>
                                                Zona en Construcci??n
                                            </Typography> 
                                            <img src={cono} alt="Cono zona en construccion" className={classes.imagen}/>
                                        </Grid>
                                    )
                                }
                            </Grid>

                        </Grid>
                    )
            }
        </Grid>
    )
}

export default ZonaJuegos
