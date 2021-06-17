import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles
} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import InfoIcon from '@material-ui/icons/Info';

const useClasses = makeStyles(theme => ({
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

const Listas = () => {
    
    const classes = useClasses();

    return (

        <div className = {classes.root}>
            <List component='nav'>

                <ListItem button>
                    <ListItemIcon>
                        <NewReleasesIcon />
                    </ListItemIcon>
                    <ListItemText primary="Publicaciones" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <SportsEsportsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Zona de Juegos" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="Info" />
                </ListItem>


            </List>

            <ListItem button className = {classes.conf}>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Configuración" />
            </ListItem>

        </div>

    )
}

export default Listas
