import React from 'react'
import { makeStyles, Typography, Grid, Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    typography: {
        marginTop: '50px',
        marginBottom: '30px'
    },
    frame: {
        margin: '10px',
        maxWidth: '80%',
        marginLeft: '35px',
        borderRadius: '8px'
    }

}));

const ZonaJuegos = () => {

    const classes = useStyles();

    return (

        <div>

            <center>
                <Typography variant="h5" className={classes.typography}>
                    JUEGOS EDUCATIVOS
                </Typography>
            </center>

            <Grid
                container
                alignItems='center'
                justify='center'
                direction='column'
            >
                <Grid 
                    item
                    container
                    xs={12} sm={12} md={10} lg={10}
                    alignItems="center"
                    justify="center"
                >
                    <Card
                        elevation={0}
                    >
                        <iframe
                            src="https://itch.io/embed/1098110"
                            height="167" width="552"
                            frameBorder="0"
                            title="game1"
                            className={classes.frame}
                        >
                            <a href="https://jadhasfuh.itch.io/read-n-play">
                                Read n Play by jadhasfuh
                            </a>
                        </iframe>
                    </Card>
                    <Card
                        elevation={0}
                    >
                        <iframe
                            src="https://itch.io/embed/1082965"
                            height="167" width="552"
                            frameBorder="0"
                            title="game2"
                            className={classes.frame}
                        >
                            <a href="https://jquirky13.itch.io/spell-circle">
                                Spell Circle by Jquirky13
                            </a>
                        </iframe>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default ZonaJuegos
