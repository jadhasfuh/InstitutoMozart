import React from 'react';
import destacado from '../images/destacado.jpg';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    lema: {
        width: '100%',
        height: '500px',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        marginTop: '30px',
        borderRadius: '10px',
        border: 'none',
        backgroundImage: `url(${destacado})`
    },
}))

const Destacado = () => {

    const classes = useStyles();

    return (

        <div>

            <Grid
                container
                alignItems='center'
                justify='center'
                direction='row'
                className={classes.root}
            >

                <Grid item xs={12} sm={12} md={10} lg={10} className={classes.lema} />

            </Grid>

        </div>

    )

}

export default Destacado
