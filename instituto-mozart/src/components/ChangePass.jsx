import React, { useState } from 'react';
import firebase from "firebase/app";
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';

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

const ChangePass = () => {

    const classes = useStyles();
    const [pass0, setPass0] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [msgError, setMsgError] = useState(null);

    const reauthenticate = (currentPassword) => {
        const user = firebase.auth().currentUser;
        const cred = firebase.auth.EmailAuthProvider.credential(
            user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    }

    const changePassword = (currentPassword, newPassword) => {
        reauthenticate(currentPassword).then(() => {
            const user = firebase.auth().currentUser;
            user.updatePassword(newPassword).then(() => {
                console.log("Password updated!");
            }).catch((error) => { console.log(error); });
        }).catch((error) => { console.log(error); });
    }

    const validar = (event) => {
        event.preventDefault()
        if (pass1 === pass2) {
            changePassword(pass0, pass1);
        } else {
            setMsgError("Las contraseñas no coinciden");
        }
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
                        CONFIGURACIÓN
                    </Typography>
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper
                    elevation={0}
                    variant="outlined"
                    className={classes.paper}
                >
                    <form onSubmit={validar}>
                        <TextField
                            label='Contraseña actual'
                            placeholder='Ingresa contraseña actual'
                            fullWidth
                            required
                            onChange={(e) => { setPass0(e.target.value) }}
                        />
                        <TextField
                            label='Nueva contraseña'
                            placeholder='Ingresa nueva contraseña'
                            fullWidth
                            required
                            onChange={(e) => { setPass1(e.target.value) }}
                        />
                        <TextField
                            label='Confirmar nueva contraseña'
                            placeholder='Confirma nueva contraseña'
                            fullWidth
                            required
                            onChange={(e) => { setPass2(e.target.value) }}
                        />
                        <Button
                            type='submit'
                            color='primary'
                            variant="contained"
                            className={classes.btnstyle}
                            fullWidth
                        >
                            CAMBIAR CONTRASEÑA
                        </Button>
                    </form>
                    {
                        msgError != null ? (
                            <Typography style={{ color: '#FF0000', marginTop: '10px', textAlign: 'center' }}>
                                {msgError}
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

export default ChangePass