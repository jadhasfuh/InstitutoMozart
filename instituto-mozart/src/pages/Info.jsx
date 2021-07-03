import React, { useState, useEffect } from 'react'
import { makeStyles, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@material-ui/core';
import BounceLoader from "react-spinners/BounceLoader";
import { blue } from '@material-ui/core/colors';
import ubicacion from './../images/ubicacion.JPG'

const useStyles = makeStyles((theme) => ({

    typography: {
        marginTop: '50px',
        marginBottom: '30px'
    },
    root: {
        marginTop: '30px'
    },
    location: {
        display: 'flex'
    },
    img: {
        width: '100%',
        height: '100%'
    }

}));

const Info = () => {

    //ESTILOS
    const classes = useStyles();

    //PANTALLA DE CARGA
    const [carga, setCarga] = useState(false);
    useEffect(() => {
        setCarga(true);
        setTimeout(() => {
            setCarga(false);
        }, 500)
    }, []);

    return (
        <div>

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
                            alignItems='center'
                            justify='center'
                            direction='column'
                            className={classes.root}
                        >
                            <Card className={classes.location}>
                                <CardContent>
                                    <center>
                                        <Typography gutterBottom variant="h5">
                                            ¡Visítanos!
                                        </Typography>
                                    </center>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Estamos ubicados en Miguel Hidalgo #105, Centro <br />
                                        Horario de atención: Lunes a Viernes 9:00 AM - 5:00 PM
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">Ver Ubicación</Button>
                                </CardActions>
                                <CardMedia component="img" image={ubicacion} />
                            </Card>
                        </Grid>
                    )
            }

        </div>
    )
}

export default Info
