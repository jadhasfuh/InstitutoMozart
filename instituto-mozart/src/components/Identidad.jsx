import React,{useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Grid, Paper, Typography, Modal, Backdrop, Fade } from '@material-ui/core';
import { green, blue, orange } from '@material-ui/core/colors';
import {AccessibilityNew, Timeline, Explore} from '@material-ui/icons'; //valores vision mision
import {IconContext} from 'react-icons';

const useClasses = makeStyles(theme => ({
    blue: {
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
        boxShadow: theme.shadows[3],
        width: theme.spacing(15),
        height: theme.spacing(15),
        cursor: 'pointer'
    },
    green: {
        color: '#fff',
        backgroundColor: green[500],
        boxShadow: theme.shadows[3],
        width: theme.spacing(15),
        height: theme.spacing(15),
        cursor: 'pointer'
    },
    orange: {
        color: '#fff',
        backgroundColor: orange[500],
        boxShadow: theme.shadows[3],
        width: theme.spacing(15),
        height: theme.spacing(15),
        cursor: 'pointer'
    },
    paper: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    typography: {
        marginTop: '50px'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paperM: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
}));

const Identidad = () => {

    const classes = useClasses();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paperM}>
                        <h2 id="transition-modal-title">Transition modal</h2>
                        <p id="transition-modal-description">react-transition-group animates me.</p>
                    </div>
                </Fade>
            </Modal>

            <center>
                <Typography variant="h5" className={classes.typography}>
                    IDENTIDAD
                </Typography>
            </center>

            <Grid
                container
                alignItems='center'
                justify='center'
                direction='row'
                className={classes.root}
                xs={16} sm={11} md={10} lg={12}>

                <Paper
                    className={classes.paper}
                    elevation={0}
                >
                    <Avatar className={classes.green} onClick={handleOpen} >
                        <IconContext.Provider value = {{size: '1em'}}>
                            <Explore className={classes.contexto}/>
                        </IconContext.Provider>
                    </Avatar> <br />
                    <Typography>Misión</Typography>
                </Paper>

                <Paper
                    className={classes.paper}
                    elevation={0}
                >
                    <Avatar className={classes.orange} onClick={handleOpen} >
                        <IconContext.Provider value = {{size: '1em'}}>
                            <Timeline className={classes.contexto}/>
                        </IconContext.Provider>
                    </Avatar> <br />
                    <Typography>Visión</Typography>
                </Paper>

                <Paper
                    className={classes.paper}
                    elevation={0}
                >
                    <Avatar className={classes.blue} onClick={handleOpen} >
                        <IconContext.Provider value = {{size: '10px'}}>
                            <AccessibilityNew className={classes.contexto}/>
                        </IconContext.Provider>
                    </Avatar> <br />
                    <Typography>Valores</Typography>
                </Paper>

            </Grid>

        </div>

    )
}

export default Identidad