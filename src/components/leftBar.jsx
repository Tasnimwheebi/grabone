import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    divs:{
        alignItems: "center",
        justifyContent: "center",
        margin :"20px 30px",
    },
    root: {
    flex: "0 0 auto",
    paddingLeft: "25px",
    },
    title:{
        color:"#01b2ee",
        fontSize: "28px",
        fontWeight: "700",
        padding: "15px 20px",
        backgroundColor: "#fff",
        borderBottom:" 1px solid #dce3ed",
        borderRadius: "3px 3px 0 0",
    },
    list:{
        fontSize: "15px",
        alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "500",
    color: "#4f5864",
    lineHeight: "1",
    transition: "all .15s ease-out",
    "&:hover":{
        color: "#01b2ee"
     }
    },
    num: {
        color: "#92a2ad",
    fontWeight: "300",
    fontSize: "12px",
    },
    root2: {
        height:"auto"
        
      },
      cardImg:{
        width: "100%",
        height: "100%",
        transition: "all .15s ease-out",
        "&:hover":{
            background: "#01b2ee"
         }
      },
      price :{
        fontSize: "35px",
        lineheight: "1",
        fontweight: "500",
        color:"#01B2EE"
      },
      subtitle:{
        color:"#01B2EE"
    }
  }));
function LeftBar (){
    const classes = useStyles();
    return(
        <div className={classes.divs}>
            <Grid container spacing={3} >
            <Grid item sm={3}>
        <List 
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader className={classes.title} component="div" id="nested-list-subheader">
            Discover
          </ListSubheader>
        }
        className={classes.root}
      >
        <ListItem className={classes.list} button>
          <ListItemText  primary="Feature Auckland deals" /> <p className={classes.num}>119</p>
        </ListItem>
        <ListItem className={classes.list} button>
          <ListItemText primary="Collections" /> <p className={classes.num}>45</p>
        </ListItem>
        <ListItem className={classes.list} button>
          <ListItemText primary="Escapes" /> <p className={classes.num}>71</p>
        </ListItem>
        <ListItem className={classes.list} button>
          <ListItemText primary="Picked for you" /> 
        </ListItem>
        <ListItem className={classes.list} button>
          <ListItemText primary="Activities, Event & Outdoors" /> <p className={classes.num}>93</p>
        </ListItem>
        <ListItem className={classes.list} button>
          <ListItemText primary="Store" /> <p className={classes.num}>1399</p>
        </ListItem>
        <ListItem className={classes.list} button>
          <ListItemText primary="Resturants, Massage & Spa" /> <p className={classes.num}>205</p>
        </ListItem>
        <ListItem className={classes.list} button>
          <ListItemText primary="House & Garden" /> <p className={classes.num}>690</p>
        </ListItem>
        <ListItem className={classes.list} button>
          <ListItemText primary="Fitness & Sports" /> <p className={classes.num}>81</p>
        </ListItem>
        <ListItem className={classes.list} button>
          <ListItemText primary="Automative" /> <p className={classes.num}>52</p>
        </ListItem>
      </List>
      </Grid>

            <Grid item sm={4}>
    <Card className={classes.root2}>
      <CardActionArea>
        <CardMedia className={classes.cardImg}
          component="img"
       
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/b5e27d63bc378aaf64355fa6150fb6a9a2a8f70c.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Dental Exam Packege
          </Typography>
          <Typography className={classes.subtitle} variant="body3" color="textSecondary" component="p">
            Dental Cosmetic
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Espom
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
     <Grid container spacing={10} >
         <Grid item sm={8}>
      <Typography variant="body2" color="textSecondary" component="p">
            5 bought
          </Typography>
</Grid>
<Grid item sm={3}>
          <Typography className={classes.price} variant="h5" component="h1" > <Typography variant="body2"component="p">
           from
          </Typography>$129</Typography>
          </Grid>
          </Grid>
      </CardActions>
    </Card>

    </Grid>
      <Grid item sm={4}>
      <Card className={classes.root2}>
      <CardActionArea>
        <CardMedia className={classes.cardImg}
          component="img"
          image="https://main-cdn.grabone.co.nz/goimage/fullsize/6009bcbb5ab263035368b7d3fd11b64f45353e8b.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            HelloFresh Spicial Offer
          </Typography>
          <Typography variant="body3" color="textSecondary" component="p">
            HelloFresh 
          </Typography>
          <Typography style={{}} variant="body2" color="textSecondary" component="p">
            .
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
     <Grid container spacing={9} >
         <Grid item sm={8}>
      <Typography variant="body2" color="textSecondary" component="p">
            135 bought
          </Typography>
</Grid>
<Grid item sm={4}>
          <Typography className={classes.price} variant="h5" component="h1" > <Typography variant="body2"component="p">
           from
          </Typography>$89.89</Typography>
          </Grid>
          </Grid>
      </CardActions>
    </Card>
      </Grid>
      </Grid>
      </div>
    )
}
export default LeftBar;