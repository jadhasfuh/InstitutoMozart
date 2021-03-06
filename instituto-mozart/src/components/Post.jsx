import React, { useEffect, useState } from 'react';
import { Grid, InputBase, TextField } from '@material-ui/core'
import { auth, store, inicia } from '../firebaseconfig';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import { grey, orange, red, green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import HighlightOffIcon from '@material-ui/icons/HighlightOff'; //ERASE
import EditIcon from '@material-ui/icons/Edit'; //EDIT
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'; //ACCEPT
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';

const useStyles = makeStyles((theme) => ({

    paper: {
        padding: theme.spacing(2),
        textAlign: 'justify',
        color: theme.palette.text.secondary
    },
    typography: {
        marginTop: '30px',
        marginBottom: '30px'
    },
    root: {
        width: '100%',
        marginTop: '30px'
    },
    avatar: {
        backgroundColor: grey[500]
    },
    parrafo: {
        textAlign: 'justify',
        width: '100%',
    },
    borrar: {
        color: red[500]
    },
    editar: {
        color: orange[500]
    },
    aceptar: {
        color: green[500]
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }

}));

const Post = ({ publicaciones }) => {

    //ESTILOS
    const classes = useStyles();

    //REVISION SI ES ADMIN
    const [usuario, setusUsuario] = useState(null);
    useEffect(() => {
        // clean up controller
        let isSubscribed = true;
        auth.onAuthStateChanged((user) => {
            if (user && isSubscribed) setusUsuario(user.email);
        })
        // cancel subscription to useEffect
        return () => (isSubscribed = false)
    }, []);

    //ABRE MODAL DE BORRADO
    const borrarPublicacion = async (id, ref, ima) => {
        setId(id);
        setReferencia(ref);
        setImagen(ima);
        setOpenD(true);
    }

    //HOOK STATES
    const [publica, setPublica] = useState(null);
    const [fecha, setFecha] = useState(null);
    const [imagen, setImagen] = useState(null);
    const [referencia, setReferencia] = useState(null);
    const [id, setId] = useState(null);
    const [openD, setOpenD] = useState(false);

    //BORRADO DE ACUERDO AL ID DE PUBLICACION
    const setDelete = async (e) => {
        e.preventDefault();
        try {
            await store.collection('publicaciones').doc(id).delete();
            if (imagen !== null) {
                // BORRAR LA IMAGEN
                const borrado = inicia.storage().ref().child(`${referencia}`);
                borrado.delete().then(function () {
                    //BORRADO
                    window.location.replace('');
                }).catch(function (error) {
                    console.log(error);
                });
            }else{
                window.location.replace('');
            }
            setOpenD(false);
        } catch (e) {
            console.log(e);
        }
    }

    //OCULTART MODAL BORRADO
    const handleCloseD = () => {
        setOpenD(false);
    };

    //ABRE MODAL DE EDICION
    const editarPublicacion = (id, publication, fecha, imag, ref) => {
        setPublica(publication);
        setFecha(fecha);
        setImagen(imag);
        setReferencia(ref);
        setId(id);
        setOpen(true);
    }

    //HOOK MODAL EDICION
    const [open, setOpen] = useState(false);

    //OCULTART MODAL EDICION
    const handleClose = () => {
        setOpen(false);
    };

    //EDICION DE ACUERDO AL ID DE PUBLICACION
    const setUpdate = async (e) => {
        e.preventDefault();
        const update = {
            publication: publica,
            fecha: fecha,
            imagen: imagen,
            referencia: referencia
        }
        try {
            await store.collection('publicaciones').doc(id).set(update);
            window.location.replace('');
            setOpen(false);
        } catch (e) {
            console.log(e);
        }
    }

    return (

        <Grid
            item xs={12}
            container
            alignItems="center"
            justify="center"
        >
            <Grid
                item xs={12}
                container
                justify="center"
            >
                {
                    publicaciones.map((item) =>
                        <Card
                            className={classes.root}
                            key={item.id}
                            elevation={1}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        D
                                    </Avatar>
                                }
                                title="Direcci??n"
                                subheader={item.fecha}
                            />
                            {
                                item.imagen !== null ? (
                                    <a href={item.imagen}>
                                        <CardMedia
                                            className={classes.media}
                                            image={item.imagen}
                                            title="Publicacion"
                                        />
                                    </a>
                                ) : (
                                    <span />
                                )
                            }
                            {
                                (item.publication !== null && item.publication.trim() !== "") ? (
                                    <CardContent>
                                        <InputBase
                                            multiline
                                            value={item.publication}
                                            disabled={true}
                                            fullWidth
                                            className={classes.parrafo}
                                        />
                                    </CardContent>
                                ) : (
                                    <span />
                                )
                            }
                            {
                                usuario ? (
                                    <CardActions>
                                        <Button
                                            size="small"
                                            onClick={
                                                (id, referencia) => {
                                                    borrarPublicacion(item.id, item.referencia, item.imagen);
                                                }
                                            }
                                            className={classes.borrar}
                                        >
                                            <HighlightOffIcon />Borrar
                                        </Button>
                                        <Button
                                            size="small"
                                            onClick={
                                                (id, publication) => {
                                                    editarPublicacion(item.id, item.publication, item.fecha, item.imagen, item.referencia);
                                                }
                                            }
                                            className={classes.editar}
                                        >
                                            <EditIcon />Editar
                                        </Button>
                                    </CardActions>
                                ) : (
                                    <span></span>
                                )
                            }
                        </Card>
                    )
                }
            </Grid>


            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" className={classes.editar}>
                    <EditIcon />Editar Publicaci??n
                </DialogTitle>
                <DialogContent>
                    <TextField
                        color="secondary"
                        multiline
                        defaultValue={publica}
                        fullWidth
                        variant="outlined"
                        className={classes.parrafo}
                        onChange={(e) => { setPublica(e.target.value) }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        className={classes.borrar}
                    >
                        <HighlightOffIcon />Cancelar
                    </Button>
                    <Button
                        onClick={setUpdate}
                        color="primary"
                        className={classes.aceptar}
                    >
                        <CheckCircleOutlineIcon />Aceptar
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openD} onClose={handleCloseD} aria-labelledby="form-dialog-title">
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" className={classes.borrar}>
                    <HighlightOffIcon />Borrar Publicaci??n
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ??Esta seguro de que desea borrar esta Publicaci??n?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleCloseD}
                        className={classes.borrar}
                    >
                        <HighlightOffIcon />Cancelar
                    </Button>
                    <Button
                        onClick={setDelete}
                        color="primary"
                        className={classes.aceptar}
                    >
                        <CheckCircleOutlineIcon />Aceptar
                    </Button>
                </DialogActions>
            </Dialog>

        </Grid>

    )
}

export default Post