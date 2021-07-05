import React, { useState } from 'react';
import { store } from '../firebaseconfig';
import { Grid, Paper, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
import { GetDate } from './GetDate';
import Alert from '@material-ui/lab/Alert';
import BackupIcon from '@material-ui/icons/Backup';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: '30px',
        flexGrow: 1
    },
    btnstyle: {
        "&:hover": {
            color: theme.palette.getContrastText(blue[500]),
            backgroundColor: blue[500]
        },
        marginTop: 20,
        color: theme.palette.getContrastText(blue[200]),
        backgroundColor: blue[200],
    },
    btnstyle2: {
        "&:hover": {
            color: theme.palette.getContrastText(blue[500]),
            backgroundColor: blue[800]
        },
        marginTop: 20,
        color: theme.palette.getContrastText(blue[200]),
        backgroundColor: blue[500]
    },
    clabel: {
        marginTop: '20px'
    }

}));

const Upload = () => {

    //ESTILOS
    const classes = useStyles();

    //PARTES DE LA PUBLICACION
    const [publicacion, setPublicacion] = useState('');
    const [error, setError] = useState(null);
    const [mensaje, setMensaje] = useState(null);

    //PUBLICACION 
    const publicar = async (e) => {

        e.preventDefault();

        if (!publicacion.trim()) {
            setError('La descripción está vacia :(');
        }

        const date = GetDate();
        const pub = {
            publication: publicacion,
            fecha: date

        };

        try {
            // eslint-disable-next-line
            const data = await store.collection('publicaciones').add(pub);
            setMensaje('Publicación realizada :)');
            window.location.replace('');
        } catch (e) {
            setError('Error al publicar, algo salió mal :(');
        }

        setPublicacion('');

    };

    return (
        <Grid
            item xs={12}
            container
            spacing={6}
        >
            <Paper
                className={classes.paper}
                elevation={0}
                variant="outlined"
            >
                <form onSubmit={publicar}>
                    <TextField
                        label='Mensaje'
                        multiline
                        rows={6}
                        required
                        variant="outlined"
                        value={publicacion}
                        color="secondary"
                        fullWidth
                        onChange={(e) => { setPublicacion(e.target.value) }}
                    />
                    <Grid
                        item
                        xs={12}
                        container
                        direction="row"
                    >
                        <Grid item xs={10}>
                            <Button
                                type='submit'
                                color='primary'
                                variant="contained"
                                className={classes.btnstyle}
                                fullWidth
                            >
                                PUBLICAR
                            </Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                color='primary'
                                variant="contained"
                                fullWidth
                                className={classes.btnstyle2}
                            >
                                <BackupIcon/>
                            </Button>
                        </Grid>
                    </Grid>

                </form>
                {
                    error &&
                    <Alert severity="error" className={classes.clabel}>
                        {error}
                    </Alert>
                }
                {
                    mensaje &&
                    <Alert severity="success" className={classes.clabel}>
                        {mensaje}
                    </Alert>

                }
            </Paper>
        </Grid>
    )
}

export default Upload
