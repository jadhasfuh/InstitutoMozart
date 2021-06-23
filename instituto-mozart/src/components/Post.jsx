import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

    paper: {
        padding: theme.spacing(2),
        textAlign: 'justify',
        color: theme.palette.text.secondary
    },
    typography: {
        marginTop: '30px',
        marginBottom: '30px'
    },
    root: {
        width: '100%',
        margin: '20px',
    },
    avatar: {
        backgroundColor: grey[500],
    },
    parrafo: {
        textAlign: 'justify',
        width: '100%'
    }

}));

const Post = ({publicaciones}) => {

    const classes = useStyles();

    return (

        <Grid
            item xs={12} sm={12} md={12} lg={12}
            container
            alignItems="center"
            justify="center"
            spacing={3}
        >
            <Grid 
                item xs={12} 
                container
                justify="center"
            >   
                    {publicaciones.map(({ publication, fecha, id }) =>
                        <Card
                            className={classes.root}
                            key={id}
                            elevation={1}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        D
                                    </Avatar>
                                }
                                title="Dirección"
                                subheader={fecha}
                            />
                            <CardContent>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                    className={classes.parrafo}>
                                    {publication}
                                </Typography>
                            </CardContent>

                        </Card>
                    )}
            </Grid>
        </Grid>

    )
}

export default Post
