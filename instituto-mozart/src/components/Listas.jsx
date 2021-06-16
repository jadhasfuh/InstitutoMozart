import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import InfoIcon from '@material-ui/icons/Info';

const Listas = () => {
    return (
        <div>
            <List component = 'nav'>

                <ListItem button>
                    <ListItemIcon>
                        <NewReleasesIcon/>
                    </ListItemIcon>
                    <ListItemText primary = "Publicaciones"/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <SportsEsportsIcon/>
                    </ListItemIcon>
                    <ListItemText primary = "Zona de Juegos"/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <SettingsIcon/>
                    </ListItemIcon>
                    <ListItemText primary = "Configuración"/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <InfoIcon/>
                    </ListItemIcon>
                    <ListItemText primary = "Info"/>
                </ListItem>

            </List>
        </div>
    )
}

export default Listas
