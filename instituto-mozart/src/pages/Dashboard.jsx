import React, { useEffect } from 'react';
import { auth } from '../firebaseconfig';
import { useHistory } from "react-router-dom";
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import ChangePass from '../components/ChangePass';

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1
    },
    typography: {
        margin: '30px'
    }

}));

const Dashboard = () => {

    //ESTILOS
    const classes = useStyles();

    //HISTORY PARA ROUTER
    const historial = useHistory();

    //REVISION SI ES ADMIN
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (!user) historial.push("/login");
        })
    }, [historial]);

    return (

        <Grid
            className={classes.root}
            container
            justify="center"
            alignItems="center"
            direction="row"
            spacing={3}
            item
            xs={12}
        >
            <center>
                <Typography variant="h5" className={classes.typography}>
                    BIENVENIDO
                </Typography>
            </center>

            <Grid
                container
                justify="center"
                direction="row"
            >
                <ChangePass />

            </Grid>
        </Grid>

    );
}

export default Dashboard