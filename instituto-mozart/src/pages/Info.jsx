import React, { useState, useEffect } from 'react'
import { makeStyles, Typography, Grid, Card, CardContent, CardMedia } from '@material-ui/core';
import BounceLoader from "react-spinners/BounceLoader";
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

    typography: {
        marginTop: '50px',
        marginBottom: '30px'
    },
    root: {
        marginTop: '30px',
    },
    ubicacion: {
        width: '80%'
    },
    img: {
        width: '100%',
        height: '400px'
    }

}));

const Info = () => {

    //ESTILOS
    const classes = useStyles();

    //PANTALLA DE CARGA
    const [carga, setCarga] = useState(false);
    useEffect(() => {
        // clean up controller
        let isSubscribed = true;
        if (isSubscribed) {
            setCarga(true);
            setTimeout(() => {
                setCarga(false);
            }, 500);
        }
        // cancel subscription to useEffect
        return () => (isSubscribed = false);
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
                            direction='row'
                            className={classes.root}
                        >
                            <Card className={classes.ubicacion} elevation={0}>
                                <CardContent>
                                    <center>
                                        <Typography gutterBottom variant="h4">
                                            ¡Visítanos!
                                        </Typography>
                                        <Typography variant="h6" color="textSecondary" component="p">
                                            Estamos ubicados en la calle Miguel Hidalgo #105 col. Centro en Sahuayo, Mich.
                                        </Typography>
                                    </center>
                                </CardContent>
                                <CardMedia
                                    component="iframe"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.7979251633938!2d-102.72507478554215!3d20.058905125553725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842ee352d03b3461%3A0x4b04416539db5eb0!2sCalle%20Miguel%20Hidalgo%20105%2C%20Santuario%2C%20Centro%20Tres%2C%2059053%20Sahuayo%20de%20Morelos%2C%20Mich.!5e0!3m2!1ses-419!2smx!4v1625279876117!5m2!1ses-419!2smx"
                                    className={classes.img}
                                />
                            </Card>
                        </Grid>
                    )
            }

        </div>
    )
}

export default Info
