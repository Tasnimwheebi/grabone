import React from "react";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    imageList: {
        height: 'auto',
        width: '90%',
        
    },
  }));
function Hero (){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <img className={classes.imageList}  src='https://mediacdn.grabone.co.nz/asset/0FvuPHyyB5'/>
    </div>
      
    )
}
export default Hero;