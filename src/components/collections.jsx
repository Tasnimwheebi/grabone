import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import '../style/collection.css'
const useStyles = makeStyles({
    header :{
        fontSize: "32px",
        fontWeight: "700",
        display: "flex",
        verticalAlign: "middle",
        color:"#4f5864",
        marginTop:"30px",
        marginLeft:"20px",
        marginBottom:"30px",
        cursor:"pointer",
       
    "&:hover":{
           color: "#01b2ee"
        }
      },
    
       
})
function Collections(){
    const classes = useStyles();
    return(
        <div>
             <Typography className={classes.header} gutterBottom variant="h4" component="h2">
         Collections <button className="col-lg-4 btn btn-info text-light" style={{
             "fontSize":"14px", "borderRadius": "5px",
    "height": "35px",
     "width":"110px",
     "marginLeft":"20px",
     "backgroundColor":"#01b2ee" ,"display": "inline-block",
    "verticalAlign": "middle"}}>view More</button>
             </Typography> 
             <div className="container row m-2" >
                <div className="col-lg-3 mb-5">
                <a href="https://new.grabone.co.nz/auckland/c/workfromhome" className="text-decoration-none">
                <div className="shadow-sm" style={{"backgroundColor":"white","height":"100%","width":"100%","zIndex":"2"}}>
                <div className="imgfrh">
                <img className="" src="https://mediacdn.grabone.co.nz/asset/HzalVebk22" width="100%" style={{"zIndex":"3","marginBottom":"5%"}}></img>
                    </div>
                    <div style={{"textAlign":"center"}}>
                    <h6 className="text-dark">Work from Home</h6>
                    <p className="text-info">Multiple deals</p>
                    <button type="button" className="btn btn-outline mb-5">View Collection &gt;</button>
                    </div>
                </div>
                    </a>
                <div className="shadow-sm" style={{"backgroundColor":"white","height":"2%","width":"96%","zIndex":"1"}}/>
                <div className="shadow-sm" style={{"backgroundColor":"white","height":"2%","width":"94%","zIndex":"-1"}}/>
                </div>
                <div className="col-lg-3 mb-5">
                <a href="https://new.grabone.co.nz/auckland/c/tipples" className="text-decoration-none">
                <div className="shadow-sm" style={{"backgroundColor":"white","height":"100%","width":"100%","zIndex":"2"}}>
                <div className="imgfrh1">
                <img src="https://mediacdn.grabone.co.nz/asset/YugEJF3paH" width="100%" style={{"zIndex":"3","marginBottom":"5%"}}></img>
                    </div>
                    <div style={{"textAlign":"center"}}>
                    <h6 className="text-dark">Tasty Tipples</h6>
                    <p className="text-info">Multiple deals</p>
                    <button type="button" className="btn btn-outline mb-5">View Collection &gt;</button>
                    </div>
                </div>
                    </a>
                <div className="shadow-sm" style={{"backgroundColor":"white","height":"2%","width":"96%","zIndex":"1"}}/>
                <div className="shadow-sm" style={{"backgroundColor":"white","height":"2%","width":"94%","zIndex":"-1"}}/>
                </div>
                <div className="col-lg-3 mb-5">
                <a href="https://new.grabone.co.nz/auckland/c/good-health-exp" className="text-decoration-none">
                <div className="shadow-sm" style={{"backgroundColor":"white","height":"100%","width":"100%","zIndex":"2"}}>
                <div className="imgfrh2">
                <img src="https://mediacdn.grabone.co.nz/asset/hWVk2iGGpA" width="100%" style={{"zIndex":"3","marginBottom":"5%"}}></img>
                    </div>
                    <div style={{"textAlign":"center"}}>
                    <h6 className="text-dark">Health & wellbeing</h6>
                    <p className="text-info">Multiple deals</p>
                    <button type="button" className="btn btn-outline mb-5">View Collection &gt;</button>
                    </div>
                </div>
                    </a>
                <div className="shadow-sm" style={{"backgroundColor":"white","height":"2%","width":"96%","zIndex":"1"}}/>
                <div className="shadow-sm" style={{"backgroundColor":"white","height":"2%","width":"94%","zIndex":"-1"}}/>
                </div>
                <div className="col-lg-3 mb-5">
                <a href="https://new.grabone.co.nz/auckland/c/everyday-essentials-delivery" className="text-decoration-none">
                <div className="shadow-sm" style={{"backgroundColor":"white","height":"100%","width":"100%","zIndex":"2"}}>
                <div className="imgfrh3">
                <img src="https://mediacdn.grabone.co.nz/asset/zSWtZxlOH2" width="100%" style={{"zIndex":"3","marginBottom":"5%"}}></img>
                    </div>
                    <div style={{"textAlign":"center"}}>
                    <h6 className="text-dark">Everyday Essential Delivery</h6>
                    <p className="text-info">Multiple deals</p>
                    <button type="button" className="btn btn-outline mb-5">View Collection &gt;</button>
                    </div>
                </div>
                    </a>
                <div className="shadow-sm" style={{"backgroundColor":"white","height":"2%","width":"96%","zIndex":"1"}}/>
                <div className="shadow-sm" style={{"backgroundColor":"white","height":"2%","width":"94%","zIndex":"-1"}}/>
                </div>
            </div>
        </div>
    )
}
export default Collections;