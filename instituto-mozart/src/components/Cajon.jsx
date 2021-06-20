import React from 'react'
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
import SettingsIcon from '@material-ui/icons/Settings';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import InfoIcon from '@material-ui/icons/Info';
import { withRouter } from "react-router-dom";

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
        textAlign: 'center',
    }
}));

const Cajon = (props) => {

    const classes = estilos();
    const { history } = props;

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
            text: "Info",
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
                <img src={logo} alt="logo.png" width="130px" style={{ marginLeft: '35px' }} />
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
            </List>

            <ListItem button className={classes.conf} key = "Configuración" onClick={() => history.push("/configuracion")}>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Configuración"/>
            </ListItem>
        </Drawer>
    )
}

export default withRouter(Cajon);
