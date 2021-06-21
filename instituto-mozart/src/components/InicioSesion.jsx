import React, { useState } from 'react'
import { auth } from '../firebaseconfig';
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';

const useClasses = makeStyles(theme => ({

    root: {
        border: '1px'
    },
    paperStyle: {
        padding: 20,
        height: '50%',
        width: '300px',
        margin: "30px auto"
    },
    avatarStyle: {
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
        width: theme.spacing(7),
        height: theme.spacing(7)
    },
    btnstyle: {
        "&:hover": {
            color: theme.palette.getContrastText(blue[500]),
            backgroundColor: blue[500]
        },
        margin: '0px 0',
        color: theme.palette.getContrastText(blue[200]),
        backgroundColor: blue[200]
    },
    clabel: {
        margin: '20px 0'
    },

}));

const InicioSesion = () => {

    const classes = useClasses();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [msgError, setMsgError] = useState(null);

    const historial = useHistory();

    const validar = (event) => {

        event.preventDefault()
        auth.signInWithEmailAndPassword(email, pass)
            .then((r) => {
                historial.push("/");    
            })
            .catch((err) => {
                if (err.code === 'auth/wrong-password') {
                    setMsgError('La contraseña no coincide :(');
                }
            });
    };

    return (
        <Grid
            className={classes.root}
            container
            alignItems='center'
            justify='center'
            direction='row'
        >
            <Paper
                elevation={0}
                variant="outlined"
                className={classes.paperStyle}
            >
                <Grid align='center'>
                    <Avatar className={classes.avatarStyle}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h5">
                        LOGIN
                    </Typography>
                </Grid>
                <form onSubmit={validar}>
                    <TextField
                        label='Usuario'
                        placeholder='Ingresa usuario'
                        fullWidth
                        required
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <TextField
                        label='Contraseña'
                        placeholder='Ingresa contraseña'
                        type='password'
                        fullWidth
                        required
                        onChange={(e) => { setPass(e.target.value) }}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="secondary"
                            />
                        }
                        className={classes.clabel}
                        label="Recordar mis datos"
                    />
                    <Button
                        type='submit'
                        color='primary'
                        variant="contained"
                        className={classes.btnstyle}
                        fullWidth
                    >
                        Iniciar Sesión
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
    )

}

export default InicioSesion