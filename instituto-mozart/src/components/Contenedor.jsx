import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import NavBar from './NavBar';
import Cajon from './Cajon';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import {
    makeStyles,
    Hidden,
} from '@material-ui/core';

const estilos = makeStyles(theme => ({
    root: {
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
        <div className={classes.root}>
            <NavBar accionAbrir={accionAbrir} />
            <Hidden smDown>
                <Cajon
                    variant="permanent"
                    open={true}
                />
            </Hidden>
            <Hidden mdUp>
                <Cajon
                    variant="temporary"
                    open={abrir}
                    onClose={accionAbrir}
                />
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/publicaciones">
                            
                        </Route>
                        <Route path="/zonajuegos">
                            
                        </Route>
                        <Route path="/configuracion">
                            
                        </Route>
                        <Route path="/info">
                            
                        </Route>
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default Contenedor
