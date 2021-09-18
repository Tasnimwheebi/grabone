import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    width: "90%",
    height:"420px"
  },
  container:{
      marginLeft:"20px",
      
  },
  price :{
    fontSize: "35px",
    lineheight: "1",
    fontweight: "500",
    color:"#01B2EE"
  },
  subtitle:{
      color:"#01B2EE"
  },
  buttonContainer:{
    display: "block",
    textAlign:"center",
    justifyContent:"center",
  },
  header :{
    fontSize: "32px",
    fontWeight: "700",
    display: "flex",
    verticalAlign: "middle",
    color:"#4f5864",
    cursor:"pointer",
    "&:hover":{
        color: "#01b2ee"
     },
     marginTop:"20px",
      marginBottom:"20px"

  },
  cardImg:{
    objectFit:"contain"
  }

});

export default function ImageList() {
  const classes = useStyles();

  return (
      <div className={classes.container} >
         <Typography className={classes.header} gutterBottom variant="h4" component="h2">
         Featured Auckland deals <button className="col-lg-4 btn btn-info text-light" style={{
             "fontSize":"14px", "borderRadius": "5px",
    "height": "35px",
     "width":"110px",
     "marginLeft":"20px",
     "backgroundColor":"#01b2ee" ,"display": "inline-block",
    "verticalAlign": "middle"}}>view More</button>
             </Typography> 
       <Grid container  >
            <Grid item   sm={3} >
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.cardImg}
          component="img"
          image="https://mediacdn.grabone.co.nz/asset/YugEJF3paH" 
        />
        <CardContent className={classes.buttonContainer}>
          <Typography gutterBottom variant="h5" component="h2">
            Grocery Goodies 
          </Typography>
          <Typography  variant="body2"  component="p">
            Mutiple deals
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <button style={{"margin":"auto"}} type="button" class="btn btn-outline-info">View Collection </button>
        
      </CardActions>
    </Card>

    </Grid>
      <Grid item sm={3} >
     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/c1a3dbabdbba0721012652889951780c340c30bd.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
           Two New Zealand Beef Tenderlion...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid container spacing={10} >
         <Grid item sm={7}>
      <Typography variant="body2" color="textSecondary" component="p">
           77 bought
          </Typography>
          </Grid>
          <Grid item sm={3}>
          <Typography className={classes.price} variant="h5" component="h1" > <Typography variant="body2"component="p">
           from
          </Typography>$180</Typography>
          
          </Grid>

</Grid>
      </CardActions>
    </Card>
      </Grid>
      

      <Grid item sm={3} >
     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/e05285ca520a0cd4932bc3430024b50f893ede44.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h6"  component="p">
           7kg Mixed Frozen Free-Flow Meet ....
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid container spacing={10} >
         <Grid item sm={7}>
      <Typography variant="body2" color="textSecondary" component="p">
           48 bought
          </Typography>
          </Grid>
          <Grid item sm={3}>
          <Typography className={classes.price} variant="h5" component="h1" > <Typography variant="body2"component="p">
           from
          </Typography>$110</Typography>
          
          </Grid>

</Grid>
      </CardActions>
    </Card>
      </Grid>
      <Grid item sm={3} >
     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/47ee88627e3b3d689446c3d0de36c6ad9aa51e85.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            60-Minute Massage Session 
          </Typography>
          <Typography variant="body2" color="#01B2EE" component="p">
           Bamboo spa Henderson
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Auckland
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid container spacing={10} >
         <Grid item sm={7}>
      <Typography variant="body2" color="textSecondary" component="p">
           13 bought
          </Typography>
          </Grid>
          <Grid item sm={3}>
          <Typography className={classes.price} variant="h5" component="h1" > <Typography variant="body2"component="p">
           from
          </Typography>$55</Typography>
          
          </Grid>

</Grid>
      </CardActions>
    </Card>
      </Grid>
</Grid>

<div style={{"marginTop":"20px"}}>
 <Grid container  >
            <Grid item   sm={3} >
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.cardImg}
          component="img"
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/e08919ba66dd006f4ac75e2ef2d98a69f226cbca.jpg"
        //   title="Contemplative Reptile"
        />
        <CardContent>
          <Typography   gutterBottom variant="h6" component="h2">
            Frozen Coldstream Lamb
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid container spacing={10} >
         <Grid item sm={7}>
      <Typography variant="body2" color="textSecondary" component="p">
           21 bought
          </Typography>
          </Grid>
          <Grid item sm={3}>
          <Typography className={classes.price} variant="h5" component="h1" > <Typography variant="body2"component="p">
           from
          </Typography>$90</Typography>
          
          </Grid>

</Grid>
        
      </CardActions>
    </Card>

    </Grid>
      <Grid item sm={3} >
     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/5f34b59c569b835477cd041783463da3e94106b3.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  gutterBottom variant="body1" component="h1">
           5-Hour Auckland Wine Tour, Tastin...
          </Typography>
          <Typography className={classes.subtitle} variant="body3" color="textSecondary" component="p">
          Auckland Scenic Tours Ltd
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Auckland 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid container spacing={10} >
         <Grid item sm={7}>
      <Typography variant="body2" color="textSecondary" component="p">
          
          </Typography>
          </Grid>
          <Grid item sm={3}>
          <Typography className={classes.price} variant="h5" component="h1" > <Typography variant="body2"component="p">
           from
          </Typography>$139</Typography>
          
          </Grid>

</Grid>
      </CardActions>
    </Card>
      </Grid>
      

      <Grid item sm={3} >
     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/c654a0fc9148883dd38a3485868bbed9461c6367.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  gutterBottom variant="body1" component="h2">
          75-Minute Pamper Package with Hot ...
          </Typography>
          <Typography className={classes.subtitle} variant="body3" color="textSecondary" component="p">
          Skinmatic Clinic
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Abany
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid container spacing={10} >
         <Grid item sm={7}>
      <Typography variant="body2" color="textSecondary" component="p">
           48 bought
          </Typography>
          </Grid>
          <Grid item sm={3}>
          <Typography className={classes.price} variant="h5" component="h1" > <Typography variant="body2"component="p">
           from
          </Typography>$110</Typography>
          
          </Grid>

</Grid>
      </CardActions>
    </Card>
      </Grid>
      <Grid item sm={3} >
     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/1901224f8fa6be3994a2e3c962188b1d1c08cc06.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          75-Minute Certified Teeth 
          </Typography>
          <Typography className={classes.subtitle} variant="body2" color="#01B2EE" component="p">
          Sparklewhite - Mt Wellington
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Mount Wellington
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid container spacing={10} >
         <Grid item sm={7}>
      <Typography variant="body2" color="textSecondary" component="p">
           13 bought
          </Typography>
          </Grid>
          <Grid item sm={3}>
          <Typography className={classes.price} variant="h5" component="h1" > <Typography variant="body2"component="p">
           from
          </Typography>$55</Typography>
          
          </Grid>

</Grid>
      </CardActions>
    </Card>
      </Grid>
</Grid>
</div>
    </div>
  );
}