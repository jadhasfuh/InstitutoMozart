import React from 'react'
import {Typography, makeStyles, Grid} from '@material-ui/core';
import back from '../images/header-bg.jpg';

const useClasses = makeStyles(theme => ({
    lema: {
        fontWeight: 'bolder',
        width: '100%',
        height: '80vh',
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
        marginTop: '30px'
    }, 
    texto: {
        marginTop: '30%',
        width: '80%',
        fontSize: '50px',
        color: '#FFFFFF',
        textShadow: '2px 2px 10px black',
        lineHeight: '50px'
    }
}));

const Header = () => {

    const classes = useClasses();

    return (

        <div>

            <Grid 
                container
                alignItems='center'
                justify='center'
                direction='row'
                className={classes.root}
               >

                <Grid item xs={12} sm={10} md={8} lg={8} className={classes.lema}>
                    <center>
                        <Typography className={classes.texto}>
                            EDUCAR CON CREATIVIDAD
                        </Typography>
                    </center>
                </Grid>   
                    
            </Grid>

            

        </div>

    )
}

export default Header