import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Grid, Paper, Typography } from '@material-ui/core';
import { green, blue, pink } from '@material-ui/core/colors';
import { FaFacebookF } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si'
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
    pink: {
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
        boxShadow: theme.shadows[3],
        width: theme.spacing(15),
        height: theme.spacing(15),
        cursor: 'pointer'
    },
    paper: {
        padding: theme.spacing(2),
    },
    typography: {
        marginTop: '40px',
        marginBottom: '20px'
    },
    iconF: {
        fontSize: '45px'
    },
    iconW: {
        fontSize: '20px'
    },
    iconI: {
        fontSize: '50px'
    },
    floating_contact: {
        position: 'fixed',
        bottom: '80px',
        right: '40px',
        color: '#fff',
        backgroundColor: green[500],
        boxShadow: theme.shadows[3],
        width: theme.spacing(10),
        height: theme.spacing(10),
        cursor: 'pointer'
    }

}));

const Contacto = () => {

    //ESTILOS
    const classes = useClasses();

    return (

        <div>

            <center>
                <Typography
                    variant="h5"
                    className={classes.typography}
                >
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
                    <a
                        href="https://www.facebook.com/institutomozartsahuayo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Avatar className={classes.blue} >
                            <IconContext.Provider value={{ size: '1em' }}>
                                <FaFacebookF className={classes.iconF} />
                            </IconContext.Provider>
                        </Avatar>
                    </a>
                </Paper>

                <Paper
                    className={classes.paper}
                    elevation={0}
                >
                    <a
                        href="https://www.instagram.com/instituto_mozart_sahuayo/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Avatar className={classes.pink} >
                            <IconContext.Provider value={{ size: '1em' }}>
                                <SiInstagram className={classes.iconI} />
                            </IconContext.Provider>
                        </Avatar>
                    </a>
                </Paper>

            </Grid>

            <a
                href="https://api.whatsapp.com/send?phone=5213531058296&text=%C2%A1Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Instituto%20Mozart."
                target="_blank"
                rel="noopener noreferrer"
            >
                <Avatar className={classes.floating_contact}>
                    <IconContext.Provider value={{ size: '3em' }}>
                        <AiOutlineWhatsApp className={classes.iconW} />
                    </IconContext.Provider>
                </Avatar>
            </a>

            <br /><br />

        </div>
    )
}

export default Contacto
