import React from "react";
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
        marginTop:"20px"
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
      alignItems:"center",
      justifyContent:"center"
    },
    header :{
      fontSize: "32px",
      fontWeight: "700",
      display: "flex",
      verticalAlign: "middle",
      color:"#4f5864",
      cursor:"pointer",
      marginTop:"30px",
      marginBottom:"30px",
      "&:hover":{
          color: "#01b2ee"
       }
  
    }
  
  });
function Activities (){
  const classes = useStyles();

    return(
<div className={classes.container}>
<Typography className={classes.header} gutterBottom variant="h4" component="h2">
Activities, Events & Outdoors  <button className="col-lg-4 btn btn-info text-light" style={{
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
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
        //   height="300"
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/f718ebf6b900f3b5ac55bb02b03d122bfa04110c.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  gutterBottom variant="body1" component="h2">
          Beach Shoes
          </Typography>
          <Typography style={{"visibility":"hidden"}} className={classes.subtitle} variant="body3" color="textSecondary" component="p">
          Terrace Downs Resort
          </Typography>
          <Typography style={{"visibility":"hidden"}}  variant="body2" color="textSecondary" component="p">
          Windwhistle
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid container spacing={10} >
         <Grid item sm={7}>
      <Typography variant="body2" color="textSecondary" component="p">
           27 bought
          </Typography>
          </Grid>
          <Grid item sm={3}>
          <Typography className={classes.price} variant="h5" component="h1" > <Typography variant="body2"component="p">
           from
          </Typography>$29</Typography>
          
          </Grid>

</Grid>
      </CardActions>
    </Card>
                </Grid>
                <Grid item   sm={3} >

            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
        //   height="300"
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/716d6a770bc5694069875cb340ac8194a2ca5b80.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  gutterBottom variant="body1" component="h2">
          35-Minute Jet Boat Ride 
          </Typography>
          <Typography className={classes.subtitle} variant="body3" color="textSecondary" component="p">
          Auckland Adventure Jet
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          St Marys Bay
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid container spacing={10} >
         <Grid item sm={7}>
      <Typography variant="body2" color="textSecondary" component="p">
           68 bought
          </Typography>
          </Grid>
          <Grid item sm={3}>
          <Typography className={classes.price} variant="h5" component="h1" > <Typography variant="body2"component="p">
           from
          </Typography>$39</Typography>
          
          </Grid>

</Grid>
      </CardActions>
    </Card>
                </Grid>
                <Grid item   sm={3} >

            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
        //   height="300"
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/b9482ac1bb587459e1ab17030ecd969184d50082.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  gutterBottom variant="body1" component="h2">
          Watergarden Entry For Two Adults
          </Typography>
          <Typography className={classes.subtitle} variant="body3" color="textSecondary" component="p">
          Wrights Water Garden &The Frog and Lily
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Patumahoe
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid container spacing={10} >
         <Grid item sm={7}>
      <Typography variant="body2" color="textSecondary" component="p">
          7 bought
          </Typography>
          </Grid>
          <Grid item sm={3}>
          <Typography className={classes.price} variant="h5" component="h1" > <Typography variant="body2"component="p">
           from
          </Typography>$8</Typography>
          
          </Grid>

</Grid>
      </CardActions>
    </Card>
                </Grid>
                <Grid item   sm={3} >

            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
        //   height="300"
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/405153533ac8d2e57bd52b1e376db70630d7e2c9.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  gutterBottom variant="body1" component="h2">
          Dream Maxx Queen Airbed
          </Typography>
          <Typography style={{"visibility":"hidden"}}  className={classes.subtitle} variant="body3" color="textSecondary" component="p">
          Kapiti Island Nature Tours
          </Typography>
          <Typography style={{"visibility":"hidden"}}  variant="body2" color="textSecondary" component="p">
          Kapiti Boating Club
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid container spacing={10} >
         <Grid item sm={7}>
      <Typography variant="body2" color="textSecondary" component="p">
           3 bought
          </Typography>
          </Grid>
          <Grid item sm={3}>
          <Typography className={classes.price} variant="h5" component="h1" > <Typography variant="body2"component="p">
           from
          </Typography>$99</Typography>
          
          </Grid>

</Grid>
      </CardActions>
    </Card>
                </Grid>
                
            </Grid>

</div>
    )
}
export default Activities;