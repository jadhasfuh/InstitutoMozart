import React, { useState, useEffect } from 'react'
import { makeStyles, Typography, Grid, } from '@material-ui/core';
import BounceLoader from "react-spinners/BounceLoader";
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

    typography: {
        marginTop: '50px',
        marginBottom: '30px'
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
                        >
                            <center>
                                <Typography variant="h5" className={classes.typography}>
                                    Información
                                </Typography>
                            </center>
                            <Grid
                                item
                                container
                                alignItems="center"
                                justify="center"
                            >
                               
                            </Grid>
                        </Grid>
                    )
            }

        </div>
    )
}

export default Info
