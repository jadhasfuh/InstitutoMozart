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
    },
}));

const Footer = () => {

    const classes = useClasses();

    return (

        <div>
            <Divider/>
            <Grid
                container
                spacing = {4}
                className = {classes.footer}
                alignItems = "center"
                justify = "center"
            >
                <Grid
                    item
                    container
                    alignItems = "center"
                    justify = "center"
                >
                    <Typography className={classes.title}>
                        2021 &copy;
                    </Typography>
                </Grid>
            </Grid>
        </div>

    )
}

export default Footer
