import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    height:"500px"
  },
  cardImg:{
    width: "100%",
    height: "100%",
    transition: "all .15s ease-out",
  }
});

export default function ImgCard() {
  const classes = useStyles();

  return (
      <div>
       <Grid container spacing={2} >
            <Grid item xs={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.cardImg}
          component="img"
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/0401fddc9d270b101acc5612b2467c0321097d51.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    </Grid>
      <Grid item xs={3}>
     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
        //   height="300"
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/6009bcbb5ab263035368b7d3fd11b64f45353e8b.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      </Grid>
      </Grid>

    </div>
  );
}