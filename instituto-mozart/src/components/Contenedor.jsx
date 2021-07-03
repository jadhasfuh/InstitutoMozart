import React, { useState, useEffect } from 'react'
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
import Game from '../pages/Game';
import {
    makeStyles,
    Hidden,
} from '@material-ui/core';
import BounceLoader from "react-spinners/BounceLoader";
import { blue } from '@material-ui/core/colors';

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

    //PANTALLA DE CARGA
    const [carga, setCarga] = useState(false);
    useEffect(() => {
        setCarga(true);
        setTimeout(() => {
            setCarga(false);
        }, 2000)
    }, []);

    //ESTILOS
    const classes = estilos();

    //DRAWER OPEN/CLOSE
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
                    {
                        carga ?
                            (
                                <BounceLoader
                                    css={`
                                    display: block;
                                    margin: 0 auto;
                                    margin-top: 30vh;
                                    border-color: red;
                                    `}
                                    size={100}
                                    loading={carga}
                                    color={blue[500]}
                                />
                            )
                            :
                            (
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
                                    <Route
                                        exact
                                        path="/game"
                                        render={props => <Game {...props} />}
                                    />
                                    <Route>
                                        <NotFound />
                                    </Route>
                                </Switch>
                            )
                    }
                </div>

            </Router>

        </div>
    )
}

export default Contenedor
