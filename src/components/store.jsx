// import React from "react";
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
      height:"400px"
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
function Store  (){
  const classes = useStyles();

    return(
<div className={classes.container}>
<Typography className={classes.header} gutterBottom variant="h4" component="h2">
Store  <button className="col-lg-4 btn btn-info text-light" style={{
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
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/7541f6f1f0c9dcc14930578c142224950cf6c9e3.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  gutterBottom variant="body1" component="h2">
          Refurbished iPhone X Range
          </Typography>
          <Typography className={classes.subtitle} variant="body3" color="textSecondary" component="p">
          Urban Global Ltd
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
          </Typography>$379</Typography>
          
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
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/311896d6715b1bbdc0aea32c70f5e22d063f17f1.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  gutterBottom variant="body1" component="h2">
          Bestway Lay-Z Spa Miami Air Jet
          </Typography>
          <Typography className={classes.subtitle} variant="body3" color="textSecondary" component="p">
          TSB Living
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
          </Typography>$920</Typography>
          
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
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/caf2565400baae7def59ffef14afedac0fb75df8.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  gutterBottom variant="body1" component="h2">
          Six Bottles of Beefeater Gin
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid container spacing={10} >
         <Grid item sm={7}>
          </Grid>
          <Grid item sm={3}>
          <Typography style={{"visibility":"hidden"}}  className={classes.price} variant="h5" component="h1" > <Typography variant="body2"component="p">
           from
          </Typography  >$99</Typography>
          
          </Grid>

</Grid>
      </CardActions>
<Typography style={{"color":"white","backgroundColor":"black","fontSize":"14px","textAlign":"center"}}>I'm over 18 Show me the price</Typography>
    </Card>
                </Grid>
                <Grid item   sm={3} >

            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/d6dec152a6da0092c75e10b6db0e3b78eeeb6d0f.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  gutterBottom variant="body1" component="h2">
          HP Chromebook G5 11.6” 16GB
          </Typography>
          <Typography className={classes.subtitle} variant="body3" color="textSecondary" component="p">
          Urban Global Ltd
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Grid container spacing={10} >
         <Grid item sm={7}>
      <Typography variant="body2" color="textSecondary" component="p">
           1 bought
          </Typography>
          </Grid>
          <Grid item sm={3}>
          <Typography className={classes.price} variant="h5" component="h1" > <Typography variant="body2"component="p">
           from
          </Typography>$249</Typography>
          
          </Grid>

</Grid>
      </CardActions>
    </Card>
                </Grid>
                
            </Grid>

</div>
    )
}
export default Store ;