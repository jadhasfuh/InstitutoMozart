import React, { useEffect, useState } from 'react'
import Post from '../components/Post';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { store } from '../firebaseconfig';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import Upload from '../components/Upload';
import { auth } from '../firebaseconfig';

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1
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
        }
        getPublicaciones();
    }, []);

    return (

        <div className={classes.root}>
            <Grid
                container
                justify="center"
                direction="row"
                spacing={3}
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
                    publicaciones.length !== 0 ?
                        (
                            <Post publicaciones={publicaciones} />
                        )
                        :
                        (
                            <Grid
                                item xs={12}
                                container
                                spacing={3}
                                className={classes.container}
                                justify="center"
                                alignItems="center"
                            >
                                <Typography className={classes.typo}>
                                    No hay publicaciones para mostrar
                                </Typography>
                                <EventBusyIcon className={classes.icon} />
                            </Grid>
                        )
                }
            </Grid>
        </div >

    )
}

export default Publicaciones
