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
            <Grid item sm={12} md={6} lg={4}>
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
      
        /* <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Actividades</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            {
                listaActividades && listaActividades.map(({ title, caption }) => 
                    <div className="col-md-4 col-sm-6 portfolio-item" key={title}>
                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={ `https://unsplash.it/350/140/?${Math.floor(Math.random(0,100) * 100)}` } alt="portfolio_img" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>{ title }</h4>
                            <p className="text-muted">{ caption }</p>
                        </div>
                    </div>
                )
            }
          </div>
        </div>
      </section> */
    )
}

export default Actividades