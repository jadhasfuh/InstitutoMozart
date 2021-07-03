import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { makeStyles, Grid } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import BounceLoader from "react-spinners/BounceLoader";
import '../gobalVariables';

const useStyles = makeStyles((theme) => ({

    frame: {
        position: 'absolute',
        rigth: 0,
        left: 0,
        top: 0,
        margiLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        height: '100%',
    },
    root: {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        paddingTop: '55%',
    }

}));

const Game = () => {

    //ESTILOS
    const classes = useStyles();

    //HISTORY PARA ROUTER
    const historial = useHistory();

    //PANTALLA DE CARGA
    const [carga, setCarga] = useState(false);
    useEffect(() => {
        setCarga(true);
        console.log(global.url)
        setTimeout(() => {
            if (global.url !== "") setCarga(false);
            else historial.push("/zonajuegos");
        }, 500)
    }, []);

    return (

        <Grid
            xs={12}
            item
            container
            alignItems='center'
            justify='center'
            className={classes.root}
            direction='column'
        >
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
                        <Grid
                            item
                            container
                            xs={12}
                            alignItems="center"
                            justify="center"
                        >
                            <iframe
                                id="iframe-div"
                                src={global.url}
                                title="game-iframe"
                                allow="autoplay"
                                scrolling="no"
                                className={classes.frame}
                            />
                        </Grid>
                    )
            }
        </Grid>

    )
}

export default Game
