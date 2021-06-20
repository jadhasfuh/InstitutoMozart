import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Grid, Paper, Typography } from '@material-ui/core';
import { green, blue } from '@material-ui/core/colors';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IconContext } from 'react-icons';

const useClasses = makeStyles(theme => ({

    blue: {
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
        boxShadow: theme.shadows[3],
        width: theme.spacing(15),
        height: theme.spacing(15),
        cursor: 'pointer'
    },
    green: {
        color: '#fff',
        backgroundColor: green[500],
        boxShadow: theme.shadows[3],
        width: theme.spacing(15),
        height: theme.spacing(15),
        cursor: 'pointer'
    },
    paper: {
        padding: theme.spacing(5),
    },
    typography: {
        marginTop: '40px'
    },
    iconF: {
        fontSize: '45px'
    },
    iconW: {
        fontSize: '20px'
    }

}));

const Contacto = () => {
    
    const classes = useClasses();

    return (
        <div>

            <center>
                <Typography variant="h5" className={classes.typography}>
                    ¡SÍGUENOS!
                </Typography>
            </center>

            <Grid
                container
                alignItems='center'
                justify='center'
                direction='row'
            >

                <Paper
                    className={classes.paper}
                    elevation={0}
                >
                    <Avatar className={classes.blue} >
                        <IconContext.Provider value={{ size: '1em' }}>
                            <FaFacebookF className = {classes.iconF} />
                        </IconContext.Provider>
                    </Avatar>
                </Paper>

                <Paper
                    className={classes.paper}
                    elevation={0}
                >
                    <Avatar className={classes.green} >
                        <IconContext.Provider value={{ size: '3em' }}>
                            <AiOutlineWhatsApp className = {classes.iconW} />
                        </IconContext.Provider>
                    </Avatar> 
                </Paper>

            </Grid>

            <br /><br />

        </div>
    )
}

export default Contacto
