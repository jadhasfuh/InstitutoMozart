import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';

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
    }

}));

const InicioSesion = () => {

    const classes = useClasses();

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
                <TextField
                    label='Usuario'
                    placeholder='Ingresa usuario'
                    fullWidth
                    required
                />
                <TextField
                    label='Contraseña'
                    placeholder='Ingresa contraseña'
                    type='password'
                    fullWidth
                    required
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="secondary"
                        />
                    }
                    className = {classes.clabel}
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
            </Paper>
        </Grid>
    )

}

export default InicioSesion