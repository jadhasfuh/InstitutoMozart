import React,{useEffect, useState} from 'react'
import {
    makeStyles,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
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

    const classes = estilos();
    const { history } = props;
    const [usuario, setusUsuario] = useState(null);

    const historial = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged ( (user) => {
            if(user) setusUsuario(user.email);
        })
    }, []);

    const cerrarSesion = () => {
        auth.signOut();
        setusUsuario(null);
        historial.push("/login");
    }

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
            text: "Información",
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
                <img src={logo} alt="logo.png" width="130px" height="50px" style={{ marginLeft: '35px', marginTop:'-5px' }} />
            </ListItem>
            <Divider />

            <List component='nav'>
                {itemsList.map((item, index) => {
                    const { text, icon, onClick } = item;
                    return (
                        <ListItem button key={text} onClick={onClick}>
                            {icon && <ListItemIcon>{icon}</ListItemIcon>}
                            <ListItemText primary={text} />
                        </ListItem>
                    );
                })}
                {
                usuario ?
                (
                    <ListItem button key = "Dashboard" onClick={() => history.push("/dashboard")}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard"/>
                    </ListItem>
                )
                :
                (
                    <span></span>   
                )
                }
            </List>

            {
                usuario ?
                (
                <ListItem button className={classes.conf} key = "Configuración" onClick={cerrarSesion}>
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cerrar Sesión"/>
                </ListItem>
                )
                :
                (
                <ListItem button className={classes.conf} key = "Configuración" onClick={() => history.push("/login")}>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Admin"/>
                </ListItem>
                )
            }

        </Drawer>
    )
}

export default withRouter(Cajon);
