import React from 'react'
import {
    makeStyles,
    Drawer,
    Divider, 
    ListItem
} from '@material-ui/core';
import Listas from './Listas';
import logo from '../images/logo.png';
import {
    useHistory,
} from "react-router-dom";

const estilos = makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0
    },
    drawerPaper: {
        width: 240
    },
    toolbar: theme.mixins.toolbar
}));

const Cajon = (props) => {

    const classes = estilos();
    const history = useHistory();
    const onClickHandle = () => {
        //history.push("/");
    }

    return (
        <Drawer
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper
            }}
            anchor="left"
            variant={props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
        >

            <ListItem 
                button
                className={classes.toolbar}
                style={{ cursor: 'pointer' }}
                onClick={onClickHandle}
                justify="cenger"
                alignItems="center"
            >
                <img src={logo} alt="logo.png" width="130px" style = {{marginLeft: '35px'}}/>
            </ListItem>

            <Divider />
            <Listas />
        </Drawer>
    )
}

export default Cajon
