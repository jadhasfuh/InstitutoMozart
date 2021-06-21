import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import NavBar from './NavBar';
import Cajon from './Cajon';
import Home from '../pages/Home';
import Publicaciones from '../pages/Publicaciones';
import Dashboard from '../pages/Dashboard';
import Info from '../pages/Info';
import ZonaJuegos from '../pages/ZonaJuegos';
import InicioSesion from './InicioSesion';
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

            <Router>

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

                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={props => <Home {...props} />}
                        />
                        <Route
                            exact
                            path="/publicaciones"
                            render={props => <Publicaciones {...props} />}
                        />
                        <Route
                            exact
                            path="/zonajuegos"
                            render={props => <ZonaJuegos {...props} />}
                        />
                        <Route
                            exact
                            path="/login"
                            render={props => <InicioSesion {...props} />}
                        />
                        <Route
                            exact
                            path="/info"
                            render={props => <Info {...props} />}
                        />
                        <Route
                            exact
                            path="/dashboard"
                            render={props => <Dashboard {...props} />}
                        />
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </div>

            </Router>

        </div>
    )
}

export default Contenedor
