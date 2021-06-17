import React,{useState} from 'react'
import NavBar from './NavBar';
import Cajon from './Cajon';
import Home from './Home';
import{
    makeStyles,
    Hidden,
} from '@material-ui/core';

const estilos = makeStyles(theme =>({
    root:{
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(-1)
    }
}));

const Contenedor = () => {

    const classes = estilos();
    const [abrir, setAbrir] = useState(false);

    const accionAbrir = () => {
        setAbrir(!abrir);
    }

    return (
        <div className = {classes.root}>
            <NavBar accionAbrir = {accionAbrir}/>
            <Hidden smDown>
                <Cajon
                    variant = "permanent"
                    open = {true}
                />
            </Hidden>
            <Hidden mdUp>
                <Cajon
                    variant = "temporary"
                    open = {abrir}
                    onClose={accionAbrir}
                />
            </Hidden>
            <div className = {classes.content}>
                <div className = {classes.toolbar}></div>
                <Home/>
            </div>
        </div>
    )
}

export default Contenedor
