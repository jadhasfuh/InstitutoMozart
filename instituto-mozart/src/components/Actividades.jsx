import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTitle from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const Actividades = ({ listaActividades }) => {
    return (
      
      <Grid container justify="center" alignContent="center">
        <center>
          <Typography variant="h5">
            ACTIVIDADES
          </Typography>
        </center>
        <GridList cols={3} spacing={40} >
          {listaActividades.map(({ title, caption }) =>
            <Grid item sm={12} md={6} lg={4} key={title}>
              <GridListTitle>
                <img src={`https://unsplash.it/350/140/?${Math.floor(Math.random(0, 100) * 100)}`} alt="" />
                <GridListTileBar
                  title={title}
                  subtitle={caption}
                />
              </GridListTitle>
            </Grid>
          )}
        </GridList>
      </Grid>
      
    )
}

export default Actividades