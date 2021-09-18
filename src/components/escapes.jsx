import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '../style/escape.css';

const useStyles = makeStyles({
    root: {
      width: "90%",
      height:"420px"
    },
    container:{
        marginLeft:"20px"
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
      "&:hover":{
          color: "#01b2ee"
       }
  
    }
  
  });
function Escapes (){
  const classes = useStyles();

    return(
<div className={classes.container}>
<Typography className={classes.header} gutterBottom variant="h4" component="h2">
         Escapes <button className="col-lg-4 btn btn-info text-light" style={{
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
      <CardActionArea className="imgfrh4">
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/a3c912cb9f2b24036e8d6315fd775511699a82b8.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  gutterBottom variant="body1" component="h2">
          One-Night 5-Star Luxury Canterbury Get..
          </Typography>
          <Typography className={classes.subtitle} variant="body3" color="textSecondary" component="p">
          Terrace Downs Resort
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Windwhistle
          </Typography>
        </CardContent>
      </CardActionArea >
      <CardActions>
      <Grid container spacing={10} >
         <Grid item sm={7}>
      <Typography variant="body2" color="textSecondary" component="p">
           139 bought
          </Typography>
          </Grid>
          <Grid item sm={3}>
          <Typography className={classes.price} variant="h5" component="h1" > <Typography variant="body2"component="p">
           from
          </Typography>$379</Typography>
          
          </Grid>

</Grid>
      </CardActions>
    </Card>
                </Grid>
                <Grid item   sm={3} >

            <Card className={classes.root}>
      <CardActionArea className="imgfrh5">
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/713d82d6b4ac1da73019ddedc6dbf9d60291ea83.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  gutterBottom variant="body1" component="h2">
          One-Night Wellington Weekend Stay for 
          </Typography>
          <Typography className={classes.subtitle} variant="body3" color="textSecondary" component="p">
          Atura Wellington
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Thorndon
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid container spacing={10} >
         <Grid item sm={7}>
      <Typography variant="body2" color="textSecondary" component="p">
           4 bought
          </Typography>
          </Grid>
          <Grid item sm={3}>
          <Typography className={classes.price} variant="h5" component="h1" > <Typography variant="body2"component="p">
           from
          </Typography>$145</Typography>
          
          </Grid>

</Grid>
      </CardActions>
    </Card>
                </Grid>
                <Grid item   sm={3} >

            <Card className={classes.root}>
      <CardActionArea className="imgfrh6">
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/14c60688f3000ec6a1230fbb12d4a6a2d3851e81.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  gutterBottom variant="body1" component="h2">
          One-Night Picton Yacht Club Getaway for
          </Typography>
          <Typography className={classes.subtitle} variant="body3" color="textSecondary" component="p">
          Picton Yacht Club
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Picton
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid container spacing={10} >
         <Grid item sm={7}>
      <Typography variant="body2" color="textSecondary" component="p">
           152 bought
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
                <Grid item   sm={3} >

            <Card className={classes.root}>
      <CardActionArea className="imgfrh7">
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/8666386e76e761c42bf3bdef48a3007819885416.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  gutterBottom variant="body1" component="h2">
          One-Night Midweek Kiwi Spotting Tour..
          </Typography>
          <Typography className={classes.subtitle} variant="body3" color="textSecondary" component="p">
          Kapiti Island Nature Tours
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Kapiti Boating Club
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid container spacing={10} >
         <Grid item sm={7}>
      <Typography variant="body2" color="textSecondary" component="p">
           11 bought
          </Typography>
          </Grid>
          <Grid item sm={3}>
          <Typography className={classes.price} variant="h5" component="h1" > <Typography variant="body2"component="p">
           from
          </Typography>$499</Typography>
          
          </Grid>

</Grid>
      </CardActions>
    </Card>
                </Grid>
                
            </Grid>

</div>
    )
}
export default Escapes;