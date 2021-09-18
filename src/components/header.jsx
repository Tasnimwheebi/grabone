// import React from "react";
// import { Navbar , NavDropdown,Container , Nav} from "react-bootstrap";

// function Header(){
//     return(
//         <Navbar collapseOnSelect expand="lg" variant="dark" bg="info">
//         <Container bg="blue">
//         <Navbar.Brand href="#home">GrabOne</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
           
//           </Nav>
//           <Nav >
//               <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#deets">More deets</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">
//               Dank memes
// //             </Nav.Link>
// //           </Nav>
// //         </Navbar.Collapse>
// //         </Container>
// //       </Navbar>
// //     )
// // }

// // export default Header;
// import { Button,Typography,AppBar,Toolbar,Grid} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
// import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
// import PersonOutlineSharpIcon from '@material-ui/icons/PersonOutlineSharp';
// import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';


// const useStyles = makeStyles((theme) => ({
//     header:{
//         // color: 'white',
//         fill: '#fff',
//         stroke: '#fff',
//         width:'145px',
//         height:'28px',
        
        

//     },
//     container:{
// padding:'0px 50px',
// width:'100%'
//     },
//     title:{
// alignSelf: "center",
//       textAlign: "left",
      
//     },
//     toolbar: {
//       background: '#01B2EE',
//     },
//     cart: {
//       alignSelf: "center",
//       textAlign: "right",
//       color: "#eee",
//     },
//     appBar: {
//         height: '50px',
//     },

// icons:{
//     width: '25px',
//     height: '25px',
//     // padding:'0px 15px',
// },
// list:{
//     listStyle:'none',
//     display:'block'
    
// },
// items:{
// //    float:'left',
//    display:'inline-block',
// //    width:'30px',
//    padding:'0px 15px'

// },
// vertical: {
//     borderLeft:'1px solid white',
//     height:'100%',
    
// },

// }));

// function Header(){
//     const classes = useStyles();
//     return(
        

//         <AppBar className={classes.appBar} position="fix">
//         <Toolbar className={classes.toolbar}>
//             <div className={classes.container}>
//         <Grid container  >
//         <Grid item xs className={classes.title}>
        
//         <svg className={classes.header}  viewBox="0 0 315.3 60"><path  d="M55.8 52.1V21.7c0-2.3 1.2-3.5 3.5-3.5h4c2.3 0 3.5 1.2 3.5 3.5v4.7c1.2-6.8 6.5-9 9.7-9l1.2.1c1.7.1 2.1 1.5 2.1 3v5.1c0 2-1 2.9-2.5 2.7-.7-.1-1.2-.1-1.8-.1-4.4 0-8.4 2.8-8.4 12.2v11.8c0 2.3-1.2 3.5-3.5 3.5h-7.8v-3.6zM3.1 30.2c0-14.4 11.5-26.4 27.4-26.4 6 0 11 1.3 15.4 3.9 2 1.2 2.2 3.1.9 4.9L45 15c-1.3 1.8-2.8 2-4.9 1-3.9-2-6.7-2.1-9.6-2.1-9.1 0-15.9 7.2-15.9 16.2 0 8.6 5.9 16.2 16.4 16.2 3 0 6.3-.7 8.9-2v-7.9H31c-1.9 0-3.5-1.6-3.5-3.5v-5.1h19.7c2 0 3.6 1.6 3.6 3.6V46c0 1.8-.6 3.2-2.3 4.4-5.5 4.1-11.6 5.9-17.7 5.9-16.4.1-27.7-11.8-27.7-26.1m78.2 6.7c0-11 7.5-19.5 18-19.5 5 0 9.3 1.9 12 6.1v-1.8c0-2.3 1.2-3.5 3.5-3.5h4.3c2.3 0 3.5 1.2 3.5 3.5v33.9h-7.8c-2.3 0-3.5-1.2-3.5-3.5v-1.7c-2.7 4.1-7.1 6-12 6-10.5 0-18-8.4-18-19.5m30.2 0c0-6-3.8-10.5-9.5-10.5-5.9 0-9.3 4.7-9.3 10.5s3.4 10.5 9.3 10.5c5.7 0 9.5-4.5 9.5-10.5m28 13.5v1.7c0 2.3-1.3 3.5-3.6 3.5h-7.7V6.5c0-2.3 1.2-3.5 3.5-3.5h4.2c2.3 0 3.6 1.2 3.6 3.5v17c2.7-4.2 7.1-6.1 11.9-6.1 10.6 0 18.1 8.5 18.1 19.5 0 11.1-7.5 19.5-18.1 19.5-4.9 0-9.2-1.9-11.9-6m18.7-13.5c0-5.8-3.5-10.5-9.3-10.5s-9.5 4.5-9.6 10.5c.1 6 3.8 10.5 9.6 10.5s9.3-4.7 9.3-10.5m15.3-6.7c0-14.3 11.1-26.3 27-26.3s27 11.9 27 26.3c0 14.3-11.1 26.3-27 26.3-16-.1-27-12-27-26.3m42.4 0c0-9-6.4-16.2-15.4-16.2s-15.4 7.2-15.4 16.2 6.3 16.2 15.4 16.2c9 0 15.4-7.2 15.4-16.2m15.4 21.9V21.7c0-2.3 1.2-3.5 3.5-3.5h4.3c2.3 0 3.5 1.2 3.5 3.5v2.5c1.8-4.3 5.8-6.8 11.4-6.8 10 0 13.7 7.9 13.7 16.7v18.1c0 2.3-1.3 3.5-3.6 3.5h-7.7V34.9c0-5.2-2-8.3-5.9-8.3s-7.9 3-7.9 10v15.6c0 2.3-1.2 3.5-3.5 3.5h-7.8v-3.6zm40.1-15c0-10.6 7.9-19.7 20.5-19.7 10.6 0 19.4 6.4 19.9 18.3.1 2.1-1.4 3.1-3.6 3.1h-26.1c-.1 4.4 4.3 8.7 11.5 8.7 2.7 0 5.5-.7 8.3-2.3 2-1.1 3.6-.9 5 .7l.8 1c1.5 1.7 1.3 3.7-.7 5.2-4.3 3.1-9.3 4.2-14.1 4.2-13.4.1-21.5-8.5-21.5-19.2m29.8-4.5c-1-5-5.3-6.6-9.2-6.6-3.9 0-8.4 1.7-9.6 6.6h18.8z"></path></svg>
//         </Grid>
        
//         <Grid item xs className={classes.cart}>
          
//         <ul className={classes.list}>
//                 <li className={classes.items} ><LocationOnOutlinedIcon className={classes.icons}></LocationOnOutlinedIcon></li>
                
//                 <li className={classes.items}> <FavoriteBorderOutlinedIcon className={classes.icons}></FavoriteBorderOutlinedIcon></li>
//                 <li className={classes.items}> <ShoppingCartOutlinedIcon className={classes.icons}></ShoppingCartOutlinedIcon></li>
//                 <li className={classes.items}> <PersonOutlineSharpIcon className={classes.icons}></PersonOutlineSharpIcon></li>
//                 <li className={classes.items}> <EmailOutlinedIcon className={classes.icons}></EmailOutlinedIcon><a>subscribe</a> </li>
              
// <li className={classes.items}>

// <a className={classes.vertical}>
// <img className={classes.image} src="//new-cdn.grabone.co.nz/static/img/icon/powered_by_nzme_short.22da364cd455.png"></img> </a> </li>
//             </ul>
          
           
           
           
           
            
//         </Grid>
//         </Grid>
//         </div>
//         </Toolbar>
//         </AppBar>
       
//     )
// }

// export default Header;

import { AppBar,Toolbar,Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineSharpIcon from '@material-ui/icons/PersonOutlineSharp';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';


const useStyles = makeStyles((theme) => ({
    title:{
        color: 'white',

    },
    toolbar: {
      background: '#01B2EE',
    },
    
    vertical: {
            borderLeft:'1px solid white',
            height:'100px',
            marginLeft:'20px'
            
        },
    cart: {
      alignSelf: "center",
      textAlign: "right",
      color: "#eee",
      
    },
    appBar: {
        height: '60px',
    },

icons:{
    width: '30px',
    height: '30px',
    margin:'0px 15px'
    
    
},
header:{
            fill: '#fff',
            stroke: '#fff',
            width:'145px',
            height:'28px',
            
            
    
        },
        image:{
            marginRight:'70px',
            marginLeft:'20px'
        }
}));

function Header(){
    const classes = useStyles();
    return(
        <header>

        <AppBar className={classes.appBar} position="relative">
        <Toolbar className={classes.toolbar}>
        <Grid container>
        <Grid item xs={3}>
         <svg className={classes.header}  viewBox="0 0 315.3 60"><path  d="M55.8 52.1V21.7c0-2.3 1.2-3.5 3.5-3.5h4c2.3 0 3.5 1.2 3.5 3.5v4.7c1.2-6.8 6.5-9 9.7-9l1.2.1c1.7.1 2.1 1.5 2.1 3v5.1c0 2-1 2.9-2.5 2.7-.7-.1-1.2-.1-1.8-.1-4.4 0-8.4 2.8-8.4 12.2v11.8c0 2.3-1.2 3.5-3.5 3.5h-7.8v-3.6zM3.1 30.2c0-14.4 11.5-26.4 27.4-26.4 6 0 11 1.3 15.4 3.9 2 1.2 2.2 3.1.9 4.9L45 15c-1.3 1.8-2.8 2-4.9 1-3.9-2-6.7-2.1-9.6-2.1-9.1 0-15.9 7.2-15.9 16.2 0 8.6 5.9 16.2 16.4 16.2 3 0 6.3-.7 8.9-2v-7.9H31c-1.9 0-3.5-1.6-3.5-3.5v-5.1h19.7c2 0 3.6 1.6 3.6 3.6V46c0 1.8-.6 3.2-2.3 4.4-5.5 4.1-11.6 5.9-17.7 5.9-16.4.1-27.7-11.8-27.7-26.1m78.2 6.7c0-11 7.5-19.5 18-19.5 5 0 9.3 1.9 12 6.1v-1.8c0-2.3 1.2-3.5 3.5-3.5h4.3c2.3 0 3.5 1.2 3.5 3.5v33.9h-7.8c-2.3 0-3.5-1.2-3.5-3.5v-1.7c-2.7 4.1-7.1 6-12 6-10.5 0-18-8.4-18-19.5m30.2 0c0-6-3.8-10.5-9.5-10.5-5.9 0-9.3 4.7-9.3 10.5s3.4 10.5 9.3 10.5c5.7 0 9.5-4.5 9.5-10.5m28 13.5v1.7c0 2.3-1.3 3.5-3.6 3.5h-7.7V6.5c0-2.3 1.2-3.5 3.5-3.5h4.2c2.3 0 3.6 1.2 3.6 3.5v17c2.7-4.2 7.1-6.1 11.9-6.1 10.6 0 18.1 8.5 18.1 19.5 0 11.1-7.5 19.5-18.1 19.5-4.9 0-9.2-1.9-11.9-6m18.7-13.5c0-5.8-3.5-10.5-9.3-10.5s-9.5 4.5-9.6 10.5c.1 6 3.8 10.5 9.6 10.5s9.3-4.7 9.3-10.5m15.3-6.7c0-14.3 11.1-26.3 27-26.3s27 11.9 27 26.3c0 14.3-11.1 26.3-27 26.3-16-.1-27-12-27-26.3m42.4 0c0-9-6.4-16.2-15.4-16.2s-15.4 7.2-15.4 16.2 6.3 16.2 15.4 16.2c9 0 15.4-7.2 15.4-16.2m15.4 21.9V21.7c0-2.3 1.2-3.5 3.5-3.5h4.3c2.3 0 3.5 1.2 3.5 3.5v2.5c1.8-4.3 5.8-6.8 11.4-6.8 10 0 13.7 7.9 13.7 16.7v18.1c0 2.3-1.3 3.5-3.6 3.5h-7.7V34.9c0-5.2-2-8.3-5.9-8.3s-7.9 3-7.9 10v15.6c0 2.3-1.2 3.5-3.5 3.5h-7.8v-3.6zm40.1-15c0-10.6 7.9-19.7 20.5-19.7 10.6 0 19.4 6.4 19.9 18.3.1 2.1-1.4 3.1-3.6 3.1h-26.1c-.1 4.4 4.3 8.7 11.5 8.7 2.7 0 5.5-.7 8.3-2.3 2-1.1 3.6-.9 5 .7l.8 1c1.5 1.7 1.3 3.7-.7 5.2-4.3 3.1-9.3 4.2-14.1 4.2-13.4.1-21.5-8.5-21.5-19.2m29.8-4.5c-1-5-5.3-6.6-9.2-6.6-3.9 0-8.4 1.7-9.6 6.6h18.8z"></path></svg>
        </Grid>
        <Grid item xs  className={classes.cart}>
                <LocationOnOutlinedIcon className={classes.icons}></LocationOnOutlinedIcon> 
               <FavoriteBorderOutlinedIcon className={classes.icons}></FavoriteBorderOutlinedIcon>
              <ShoppingCartOutlinedIcon className={classes.icons}></ShoppingCartOutlinedIcon>
               <PersonOutlineSharpIcon className={classes.icons}></PersonOutlineSharpIcon>
                <EmailOutlinedIcon className={classes.icons}></EmailOutlinedIcon>  <span>Subscribe</span>
               <a className={classes.vertical}> </a>
                <img className={classes.image} src="https://new-cdn.grabone.co.nz/static/img/icon/powered_by_nzme_short.22da364cd455.png"></img>
        </Grid> 
        </Grid>
        </Toolbar>
        </AppBar>
        </header>
    )
}

export default Header;