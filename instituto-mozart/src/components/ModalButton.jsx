import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles';
import { Avatar, Paper, Typography, Modal, Backdrop, Fade } from '@material-ui/core';
import { AccessibilityNew, Timeline, Explore } from '@material-ui/icons'; //valores vision mision
import { IconContext } from 'react-icons';

export const validValues = [
    "valores",
    "mision",
    "vision"
];

const stateByName = {
    valores: AccessibilityNew,
    mision: Timeline,
    vision: Explore
};

const renderState = state => {
    const IconState = stateByName[state];
    return <IconState />
};

const useClasses = makeStyles(theme => ({

    paper: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    modal: {
        display: 'flex',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '80%'
    },
    paperM: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        textAlign: 'justify'
    },
    icon: {
        fontSize: '45px'
    }

}));

const ModalButton = ({state, title, description, color}) => {

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
                        <center><Typography variant="h6" id="transition-modal-title">{title}</Typography></center>
                        <Typography variant="caption" id="transition-modal-description">{description}</Typography>
                    </div>
                </Fade>
            </Modal>

            <Paper
                className={classes.paper}
                elevation={0}
            >
                <Avatar className={color} onClick={handleOpen} >
                    <IconContext.Provider value={{ size: '6em' }}>
                        {renderState(state)}
                    </IconContext.Provider>
                </Avatar> <br />
                <Typography>{title}</Typography>
            </Paper>
        </div>
    )
}

ModalButton.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
}

export default ModalButton
