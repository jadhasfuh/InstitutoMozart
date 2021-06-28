import React from 'react';
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

    const classes = useStyles();

    return (

        <div className={classes.root}>

            <center>
                <Typography variant="h5" className={classes.typography}>
                    BIENVENIDO
                </Typography>
            </center>

            <Grid
                container
                justify="center"
                direction="row"
                spacing={3}
            >
                <ChangePass />
                
            </Grid>

        </div>

    );
}

export default Dashboard