import React from 'react'
import {Typography, makeStyles, Grid} from '@material-ui/core';
import back from '../images/header-bg.jpg';

const useClasses = makeStyles(theme => ({
    lema: {
        fontWeight: 'bolder',
        width: '100%',
        height: '84vh',
        backgroundImage: `url(${back})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        marginTop: '0px'
    }, 
    texto: {
        marginTop: '280px',
        width: '90%',
        fontSize: '55px',
        color: '#FFFFFF',
        textShadow: '2px 2px 15px black',
        [theme.breakpoints.down('xs')]: {
            fontSize: '40px',
        },
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
               >

                <Grid item xs={12} sm={12} md={10} lg={10} className={classes.lema}>
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