import React, { useEffect, useState } from 'react'
import {
    makeStyles,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import Cookies from 'js-cookie'
import logo from '../images/logo.png';
import { auth } from '../firebaseconfig';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import { withRouter, useHistory } from "react-router-dom";

const estilos = makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0
    },
    drawerPaper: {
        width: 240
    },
    toolbar: theme.mixins.toolbar,
    root: {
        height: '100%'
    },
    conf: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '240px',
        backgroundColor: '#2196F3',
        textAlign: 'left',
    }
}));

const Cajon = (props) => {

    //ESTILOS
    const classes = estilos();

    //HISTORY PARA ROUTER
    const { history } = props;
    const historial = useHistory();

    //HOOK USUARIO
    const [usuario, setUsuario] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) setUsuario(user.email);
        })
    }, []);

    //BOTON Y REDIRECCION CERRAR SESION
    const cerrarSesion = () => {
        auth.signOut();
        setUsuario(null);
        Cookies.remove('email')
        Cookies.remove('pass')
        historial.push("/login");
    }

    //MENU LATERAL (CAJON)
    const itemsList = [
        {
            text: "Publicaciones",
            icon: <NewReleasesIcon />,
            onClick: () => history.push("/publicaciones")
        },
        {
            text: "Zona de Juegos",
            icon: <SportsEsportsIcon />,
            onClick: () => history.push("/zonajuegos")
        },
        {
            text: "Informaci??n",
            icon: <InfoIcon />,
            onClick: () => history.push("/info")
        }
    ];

    return (
        <Drawer
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper
            }}
            anchor="left"
            variant={props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
        >

            <ListItem
                button
                className={classes.toolbar}
                style={{ cursor: 'pointer' }}
                onClick={() => history.push("/")}
                justify="center"
                alignItems="center"
            >
                <img
                    src={logo}
                    alt="logo.png"
                    width="130px"
                    height="50px"
                    style={{ 
                        marginLeft: '35px',
                        marginTop: '-5px'
                    }}
                />
            </ListItem>

            <Divider />

            <List component='nav'>
                {
                
                    itemsList.map((item) => {

                        const { text, icon, onClick } = item;
                        return (
                            <ListItem
                                button
                                key={text}
                                onClick={onClick}
                            >
                                {
                                    icon &&
                                        <ListItemIcon>
                                            {icon}
                                        </ListItemIcon>
                                }
                                <ListItemText primary={text} />
                            </ListItem>
                        );
                    })
                }
                {
                    usuario &&

                    <ListItem
                        button
                        key="Dashboard"
                        onClick={() => history.push("/dashboard")}
                    >
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>

                }
            </List>

            {
                usuario ?
                    (
                        <ListItem
                            button
                            className={classes.conf}
                            key="Configuraci??n"
                            onClick={cerrarSesion}
                        >
                            <ListItemIcon>
                                <ExitToAppIcon />
                            </ListItemIcon>
                            <ListItemText primary="Cerrar Sesi??n" />
                        </ListItem>
                    )
                    :
                    (
                        <ListItem
                            button
                            className={classes.conf}
                            key="Configuraci??n"
                            onClick={() => history.push("/login")}
                        >
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Admin" />
                        </ListItem>
                    )
            }

        </Drawer>
    )
}

export default withRouter(Cajon);