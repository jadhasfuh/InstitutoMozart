import React from "react";
import { AppBar, makeStyles, Typography, Toolbar, IconButton, Divider} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    title:{
        flexGrow: 1
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${240}px)`,
            marginLeft: 240,
        },
    },
}))

const Navbar = (props) => {

  const classes = useStyles();

  return (
    <AppBar 
        className={classes.appBar}
        elevation={0}
    >
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="menu"
                className={classes.menuButton}
                onClick={() => props.accionAbrir()}
            >
                <MenuIcon/>
            </IconButton>
            <Typography
                variant="h6"
                className = {classes.title}
            >
                Jardín de Niños Instituto Mozart
            </Typography>
        </Toolbar>
        <Divider/>
    </AppBar>
  );

};

export default Navbar;