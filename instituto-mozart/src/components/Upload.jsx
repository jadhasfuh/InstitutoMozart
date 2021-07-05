import React, { useState } from 'react';
import { store, inicia } from '../firebaseconfig';
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
            color: theme.palette.getContrastText(blue[800]),
            backgroundColor: blue[800]
        },
        marginTop: 20,
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500]
    },
    clabel: {
        marginTop: '20px'
    },
    input: {
        display: 'none',
    }

}));

const Upload = () => {

    //ESTILOS
    const classes = useStyles();

    //PARTES DE LA PUBLICACION
    const [publicacion, setPublicacion] = useState('');
    const [error, setError] = useState(null);
    const [mensaje, setMensaje] = useState(null);
    const [button, setButton] = useState(false)
    const [urls, setUrls] = useState(null)

    var img = null;
    const date = GetDate();

    //HANDLE IMAGE
    const handleImageChange = (e) => {
        setButton(true);
        img = e.target.files[0];
        const referencia = inicia.storage().ref();
        const fileReference = referencia.child(`/${img.name}${date}`);
        fileReference.put(img).then(() => {
            setMensaje("Imagen compatible :)");
            setButton(false);
            inicia.storage().ref(`${img.name}${date}`).getDownloadURL().then((url) => {
                setUrls(url);
            }).catch((e) => console.log('Errors while downloading => ', e));
        });
    }

    //PUBLICACION 
    const publicar = async (e) => {

        e.preventDefault();

        if (!publicacion.trim()) {
            setError('La descripción está vacia :(');
        }
        const pub = {
            publication: publicacion,
            fecha: date,
            imagen: urls
        };

        try {
            // eslint-disable-next-line
            const data = await store.collection('publicaciones').add(pub);
            setMensaje('Publicación realizada :)');
            setUrls(null);
            window.location.replace('');
        } catch (e) {
            setError(e);
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
                                disabled = {button}
                            >
                                PUBLICAR
                            </Button>
                        </Grid>
                        <Grid item xs={2}>
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                onChange={handleImageChange}
                                multiple
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    component="span"
                                    className={classes.btnstyle2}
                                >
                                    <BackupIcon />
                                </Button>
                            </label>
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
