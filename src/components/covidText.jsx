import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        margin :"20px 30px",
        display:"flex",
        fontWeight:"600",
    }
}))
function CovidText (){
    const classes = useStyles();

    return (
        <div >
        <Typography className={classes.root} >
            Covid 19 Update:
            <Typography> We encourage you to shop as normal for all your essential products. Non-essentials also available, but shipping delays may occur. No pickup options available. Stay safe NZ!
                </Typography>
        </Typography>
        </div>
    )
}
export default CovidText;