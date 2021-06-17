import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Grid, Paper, Typography } from '@material-ui/core';
import { green, blue, orange } from '@material-ui/core/colors';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew'; //valores
import TimelineIcon from '@material-ui/icons/Timeline'; //vision
import ExploreIcon from '@material-ui/icons/Explore'; //mision

const useClasses = makeStyles(theme => ({
    blue: {
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
        boxShadow: theme.shadows[3],
        width: theme.spacing(15),
        height: theme.spacing(15)
    },
    green: {
        color: '#fff',
        backgroundColor: green[500],
        boxShadow: theme.shadows[3],
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    orange: {
        color: '#fff',
        backgroundColor: orange[500],
        boxShadow: theme.shadows[3],
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    paper: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    typography: {
        marginTop: '50px'
    }
}));

const Identidad = () => {

    const classes = useClasses();

    return (
        <div>

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
                    <Avatar className={classes.green}>
                        <ExploreIcon />
                    </Avatar> <br/>
                    <Typography>Misión</Typography>
                </Paper>

                <Paper 
                    className={classes.paper}
                    elevation={0}
                >
                    <Avatar className={classes.orange}>
                        <TimelineIcon />
                    </Avatar> <br/>
                    <Typography>Visión</Typography>
                </Paper>

                <Paper 
                    className={classes.paper}
                    elevation={0}
                >
                    <Avatar className={classes.blue}>
                        <AccessibilityNewIcon />
                    </Avatar> <br/>
                    <Typography>Valores</Typography>
                </Paper>

            </Grid>
        
        </div>

    )
}

export default Identidad
