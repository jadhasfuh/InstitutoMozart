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
    maxHeight: 320,
    margin: '20px',
  },
  typography: {
    marginTop: '50px',
    marginBottom: '30px'
  },
  img: {
    width: '450px',
    height: '200px'
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
        {listaActividades.map(({ title, caption, src }) => 
          <Card className={classes.root} key={title+caption}>
            <CardActionArea>
              <img src={src} alt="Actividad" className={classes.img}/>
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