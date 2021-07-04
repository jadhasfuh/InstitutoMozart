import React from 'react'
import {
    Grid,
    makeStyles,
    Typography,
    Divider
} from '@material-ui/core';

const useClasses = makeStyles(theme => ({
    title: {
        marginTop: '13px',
        marginBottom: '-5px',
        fontSize: '16px'
    },
    footer: {
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${240}px)`,
            marginLeft: '100px'
        },
        flexGrow: 1
    }
    
}));

const Footer = () => {

    const classes = useClasses();

    return (
            <Grid
                container
                item
                spacing = {4}
                className = {classes.footer}
                alignItems = "center"
                justify = "center"
                xs = {12}
            >
                <Grid
                    item
                    container
                    alignItems = "center"
                    justify = "center"
                >
                    <Divider/>
                    <Divider/>
                    <center><Typography className={classes.title}>
                        2021 &copy;
                    </Typography></center>
                </Grid>
            </Grid>

    )
}

export default Footer
