import React, { useEffect, useState } from 'react'
import Post from '../components/Post';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { store } from '../firebaseconfig';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import Upload from '../components/Upload';
import { auth } from '../firebaseconfig';
import BounceLoader from "react-spinners/BounceLoader";
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    typo: {
        fontSize: '20px',
        marginTop: '30px',
        marginBottom: '20px'
    },
    icon: {
        fontSize: '100px'
    },
    container: {
        flexGrow: 1,
        textAlign: 'center'
    }

}));


const Publicaciones = () => {

    //ESTILOS
    const classes = useStyles();

    //CONFIRMA QUE SEA ADMIN
    const [usuario, setusUsuario] = useState(null);

    //LLAMA A LAS PUBLICACIONES
    const [publicaciones, setPublicaciones] = useState('');

    //CARGA
    const [carga, setCarga] = useState(true);
    // eslint-disable-next-line
    const [state, setState] = useState({});

    useEffect(() => {
        //REVISION ADMIN
        auth.onAuthStateChanged((user) => {
            if (user) setusUsuario(user.email);
        })
        //MOSTRAR PUBLICACIONES
        const getPublicaciones = async () => {
            const { docs } = await store.collection('publicaciones').get();
            const arreglo = docs.map(item => ({ id: item.id, ...item.data() }));
            setPublicaciones(arreglo);
            setCarga(false);
        }
        getPublicaciones();
        return () => {
            setState({});
        };
    }, []);

    return (
        <Grid
            container
            justify="center"
            item
        >
            <Grid
                container
                item
                justify="center"
                direction="row"
                spacing={3}
                className={classes.root}
            >
                {
                    usuario ? (
                        <Upload />
                    )
                        :
                        (
                            <span></span>
                        )
                }
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
                            publicaciones.length !== 0 ?
                                (
                                    <Post publicaciones={publicaciones} />
                                )
                                :
                                (
                                    <Grid
                                        item xs={12}
                                        container
                                        className={classes.container}
                                        justify="center"
                                    >
                                        <Grid
                                            item
                                            container
                                            justify="center"
                                        >
                                            <Typography className={classes.typo}>
                                                No hay publicaciones para mostrar
                                            </Typography>
                                            <br />
                                        </Grid>
                                        <EventBusyIcon className={classes.icon} />
                                    </Grid>
                                )
                        )
                }
            </Grid>
        </Grid>
    )
}

export default Publicaciones