import React from 'react'
import{
    makeStyles,
    Drawer
} from '@material-ui/core';
import Listas from './Listas';

const estilos = makeStyles(theme =>({
    drawer: {
        width: 240,
        flexShrink: 0
    },
    drawerPaper: {
        width: 240
    },
    toolbar: theme.mixins.toolbar    
}));

const Cajon = (props) => {

    const classes = estilos();

    return (
        <Drawer
            className = {classes.drawer}
            classes = {{
                paper: classes.drawerPaper
            }}
            anchor = "left"
            variant = {props.variant}
            open = {props.open}
            onClose={props.onClose ? props.onClose : null}
        >
           
            <Listas/>
        </Drawer>
    )
}

export default Cajon
