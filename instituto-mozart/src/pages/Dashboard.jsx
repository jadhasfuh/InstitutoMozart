import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import ChangePass from '../components/ChangePass';
import Upload from '../components/Upload';

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1
    },

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
                <Upload />
                
            </Grid>

        </div>

    );
}

export default Dashboard