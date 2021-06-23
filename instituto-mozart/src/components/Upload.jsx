import React, { useState } from 'react';
import { store } from '../firebaseconfig';
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
import {GetDate} from './GetDate'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    typography: {
        marginTop: '30px',
        marginBottom: '30px'
    },
    btnstyle: {
        "&:hover": {
            color: theme.palette.getContrastText(blue[500]),
            backgroundColor: blue[500]
        },
        margin: '0px 0',
        marginTop: '30px',
        color: theme.palette.getContrastText(blue[200]),
        backgroundColor: blue[200]
    }
}));

const Upload = () => {

    const classes = useStyles();
    const [publicacion, setPublicacion] = useState('');
    const [error, setError] = useState(null);

    const publicar = async (e) => {
        e.preventDefault();
        if (!publicacion.trim()) {
            setError('La descripción está vacia');
        }
        const date = GetDate();
        const pub = {
            publication: publicacion,
            fecha: date
        };
        try {
            // eslint-disable-next-line
            const data = await store.collection('publicaciones').add(pub);
            console.log('registrado');
        } catch (e) {
            console.log(e);
        }
        setPublicacion('');
        //setImagen('');
    };

    return (
        <Grid
            item xs={12} sm={12} md={6} lg={6}
            container
            spacing={3}
        >
            <Grid item xs={12}>
                <Paper
                    className={classes.paper}
                    elevation={0}
                    variant="outlined"
                >
                    <Typography variant="h6" className={classes.typography}>
                        PUBLICAR
                    </Typography>
                </Paper>
            </Grid>

            <Grid item xs={12}>
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
                        <Button
                            type='submit'
                            color='primary'
                            variant="contained"
                            className={classes.btnstyle}
                            fullWidth
                        >
                            PUBLICAR
                        </Button>
                    </form>
                    {
                        error != null ? (
                            <Typography style={{ color: '#FF0000', marginTop: '10px', textAlign: 'center' }}>
                                {error}
                            </Typography>
                        )
                            :
                            (
                                <span />
                            )
                    }
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Upload
