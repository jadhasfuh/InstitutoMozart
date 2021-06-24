import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 450,
    maxHeight: 300,
    margin: '10px',
  },
  typography: {
    marginTop: '50px',
    marginBottom: '30px'
  }
}));

const Actividades = ({ listaActividades }) => {

  const classes = useStyles();

  return (

    <div>
      <center>
        <Typography variant="h5" className={classes.typography}>
          ACTIVIDADES
        </Typography>
      </center>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="row"
      >
        {listaActividades.map(({ title, caption }) =>
          <Card className={classes.root}>
            <CardActionArea>
              <img src={`https://unsplash.it/450/200/?${Math.floor(Math.random(0, 100) * 100)}`} alt="" />
              <CardContent>
                <center>
                  <Typography gutterBottom variant="h5">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" >
                    {caption}
                  </Typography>
                </center>

              </CardContent>
            </CardActionArea>
          </Card>
        )}
      </Grid>
    </div>

  )
}

export default Actividades