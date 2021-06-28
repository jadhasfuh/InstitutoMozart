import React, { useEffect, useState } from 'react'
import Post from '../components/Post';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { store } from '../firebaseconfig';
import EventBusyIcon from '@material-ui/icons/EventBusy';

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

    const classes = useStyles();

    const [publicaciones, setPublicaciones] = useState('');

    useEffect(() => {
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
                    publicaciones.length !== 0 ?
                        (
                            <Post publicaciones={publicaciones} />
                        )
                        :
                        (
                            <div className={classes.container}>
                                <Typography className={classes.typo}>
                                    No hay publicaciones para mostrar
                                </Typography>
                                <EventBusyIcon className={classes.icon}/>
                            </div>
                        )
                }
            </Grid>
        </div >

    )
}

export default Publicaciones
