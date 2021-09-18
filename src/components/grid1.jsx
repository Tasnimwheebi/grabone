import React from "react";
import Grid from '@material-ui/core/Grid';
import LeftBar from "./leftBar";
import ImgCard from "./cardsList1";
import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function ListItem (){
    return(
        <div>
              <Grid container spacing={1}
 >
            <Grid item xs={12}>
            <LeftBar/>
            </Grid>
            <Grid> 
            <ImgCard/>
            </Grid>
           </Grid>
        </div>
    )
}

export default ListItem;