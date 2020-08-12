import React from 'react';
import logo from './logo.svg';
import cartlogo from './animat-shopping-cart-color.gif';
import applogo from './smc-logo-without-background.png';
import notificationlogo from './notificationnew.png';
import shoplogo from './shopping.png';
import wishlistlogo from './wishlist.jpg';
import footballBanner from './footballBanner.jpg';
import cricketBanner from './cricketBanner.jpg';
import badmintonBanner from './badmintonBanner.jpg';
import volleyballBanner from './volleyballBanner.jpg';
import basketballBanner from './basketballBanner.jpg';
import scoreboardBanner from './scoreboardBanner.jpg';
import feedback from './feedback.png';
import latestNews from './latestNews.jpg';
import offerZone from './offerZone.jpg';
import closewindow from './closewindow.png';
import './App.css';
import Home from './Home.js';
import ClothesDetails from './ClothesDetails.js';
import CartDetails from './CartDetails.js';
import ScoreBoard from './ScoreBoard.js';
import {Container, Row, Col} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import { Menu, Segment } from 'semantic-ui-react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup'
import Fade from 'react-bootstrap/Fade'
import Input  from 'react-bootstrap/InputGroup';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from 'react-bootstrap/Button'
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { Route, Switch, Link } from "react-router-dom";
import _ from 'lodash';
import one from './footballjersey/1.jpg';
import two from './footballjersey/2.png';
import three from './footballjersey/3.png';
import four from './footballjersey/4.jpg';




const validationMethods =  {
    required : (field, value) => {
        if (!value.toString().trim().length) {
            return  `This ${field} field is required.`
        }
    },
    isEmail: (field,value) => {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(value) === false) {
            return  `Invalid Email Address.`
        }        
    }
} 





/*const FromValidationError = props => (
    <Fade in={Boolean(props.field)}  tag="p" >
       { props.field ?  Object.values(props.field).shift() : '' } 
  </Fade>
); */
 
const validateForm = (form) => {
    const loginForm = document.getElementById(form)
     return loginForm.querySelectorAll('[validations]');
}


 
const runValidationRules  = (element, errors) => {
    const target = element;
    const field =  target.name;
    const value = target.value
    let validations =  element.getAttribute('validations');
    validations =  validations.split(',')
 
    for (let validation of validations) {
        validation = validation.split(':');
        const rule = validation[0];
        const error = validationMethods[rule](field, value);
        errors[field] = errors[field] || {};
        if(error) {
            errors[field][rule] = error;
        } else {
            if(_.isEmpty(errors[field])) {
                delete errors[field];
            } else {
                delete errors[field][rule];
            }
        }
    }
 
    return errors;
}

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" style={{width: '100%'}} cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}


class App extends React.Component {
constructor(props,context){
	super(props,context);
    
    this.state ={
    open: false,
    email: "",
    password: "",
     errors: [],
     routerValue: "<ClothesDetails />",
     det: "Ajay",
     cardInfo: [
      {image: one, title: "ATK FANS JERSEY",finalprice: "270",previousprice: "300",discount: "10", itemDetails: ["Well Stitched","Standard Size(S-M-XL)","Cotton/Polyster"]},
{image: two, title: "BENGALURU FC FANS JERSEY",finalprice: "270",previousprice: "300",discount: "10", itemDetails: ["Well Stitched","Standard Size(S-M-XL)","Cotton/Polyster"]},
{image: three, title: "BRAZIL NATIONAL FOOTBALL TEAM JERSEY",finalprice: "270",previousprice: "300",discount: "10", itemDetails: ["Well Stitched","Standard Size(S-M-XL)","Cotton/Polyster"]},
{image: four, title: "EAST BENGAL FC FANS JERSEY",finalprice: "270",previousprice: "300",discount: "10", itemDetails: ["Well Stitched","Standard Size(S-M-XL)","Cotton/Polyster"]}  
		  ]
	}
    this.handleLogin = this.handleLogin.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.footballjerseyDetails = this.footballjerseyDetails.bind(this);
    this.handleCart = this.handleCart.bind(this);
}

handleClose(){
    this.setState({
            open : false
        });
}

handleCart(){
    this.props.history.push("/CartDetails");
}

handleLogin(){
    this.setState({
            open : true
        });
}
footballjerseyDetails(){
   this.setState({
          cardInfo: [
        {image: one, title: "ATK FANS JERSEY",finalprice: "270",previousprice: "300",discount: "10", itemDetails: ["Well Stitched","Standard Size(S-M-XL)","Cotton/Polyster"]},
{image: two, title: "BENGALURU FC FANS JERSEY",finalprice: "270",previousprice: "300",discount: "10", itemDetails: ["Well Stitched","Standard Size(S-M-XL)","Cotton/Polyster"]},
{image: three, title: "BRAZIL NATIONAL FOOTBALL TEAM JERSEY",finalprice: "270",previousprice: "300",discount: "10", itemDetails: ["Well Stitched","Standard Size(S-M-XL)","Cotton/Polyster"]},
{image: four, title: "EAST BENGAL FC FANS JERSEY",finalprice: "270",previousprice: "300",discount: "10", itemDetails: ["Well Stitched","Standard Size(S-M-XL)","Cotton/Polyster"]}  
		  ]
   })
}

render(){

const handleCart = () => {
          return(<Route component={CartDetails} exact path="/CartDetails" />);
        } 

	return(
		<div>
		<Container>
  <Row style={{width: '100%', backgroundColor: '#0E375b', display: 'table', clear: 'both', content: ""}}>
    <Col xs={2} style={{width: '20%',float: 'left'}}>
      <img src={applogo} style={{width: '60%', marginLeft: '4%'}}/>
    </Col>
	 <Col xs={4} style={{width: '30%',float: 'left'}}>
      <input type='text' style={{width: '100%',marginTop: '2%',height: '36px'}} />
    </Col>
	<Col xs={2} style={{width: '20%',float: 'right'}}>
      <Button style={{marginLeft: '27%', width: '40%', marginTop: '2%',height: '45px'}} onClick={this.handleLogin}>Login</Button>
    </Col>
	<Col xs={2} style={{width: '5%',float: 'right'}}>
      <img src={wishlistlogo} style={{width: '80%', marginLeft: '4%'}}/>
    </Col>
	<Col xs={2} style={{width: '5%',float: 'right'}}>
     <a href="/CardDetails"> <img src={shoplogo} style={{width: '80%', marginLeft: '4%'}} /></a>
    </Col>
	<Col xs={2} style={{width: '5%',float: 'right'}}>
      <img src={notificationlogo} style={{width: '80%', marginLeft: '4%'}}/>
    </Col>
	
  </Row>
</Container>

    <Container>
        <header>
        <nav>
        <ul className ="menu">
           <li> <a href="/">HOME</a></li>
           <li> <a >FOOTBALL</a>
                <ul className = "submenu">
                    <li onClick={this.footballjerseyDetails}><a href="/Details" >FOOTBALL JERSEY</a></li>
                    <li><a href="/Details">FOOTBALL SHOES</a></li>
                    <li><a href="/Details">FOOTBALL GLOVES</a></li>
                    <li><a href="/Details">I LEAGUE JERSEY</a></li>
                    <li><a href="/Details">ISL JERSEY</a></li>
                </ul>
           </li>
           <li> <a >KAIZEN</a>
                <ul className = "submenu">
                    <li><a href="/Details">KAIZEN BASKETBALL</a></li>
                    <li><a href="/Details">KAIZEN CLOTHING</a></li>
                    <li><a href="/Details">KAIZEN FOOTBALL</a></li>
                    <li><a href="/Details">KAIZEN VOLLEYBALL</a></li>
                </ul>
           </li>
           <li> <a>CRICKET</a>
                <ul className = "submenu">
                    <li><a href="/Details">CRICKET BALL</a></li>
                    <li><a href="/Details">CRICKET BAT</a></li>
                    <li><a href="/Details">CRICKET WICKET</a></li>
                    <li><a href="/Details">CRICKET JERSEY</a></li>
                    <li><a href="/Details">IPL JERSEY</a></li>
                </ul>
           </li>
           <li> <a >BASKETBALL</a>
                <ul className = "submenu">
                    <li><a href="/Details">BASKETBALL BALL</a></li>
                    <li><a href="/Details">BASKETBALL JERSEY</a></li>
                    <li><a href="/Details">BASKETBALL SHOES</a></li>
                    <li><a href="/Details">BASKETBALL SHORTS</a></li>
                </ul>
           </li>
           <li> <a >VOLLYBALL</a>
                <ul className = "submenu">
                    <li><a href="/Details">VOLLYBALL BALL</a></li>
                    <li><a href="/Details">VOLLYBALL JERSEY</a></li>
                    <li><a href="/Details">VOLLYBALL SHOES</a></li>
                    <li><a href="/Details">VOLLYBALL SHORTS</a></li>
                </ul>
           </li>
           <li> <a >BADMINTON</a>
                <ul className = "submenu">
                    <li><a href="/Details">BADMINTON RACQUET</a></li>
                    <li><a href="/Details">BADMINTON JERSEY</a></li>
                    <li><a href="/Details">BADMINTON SHOES</a></li>
                    <li><a href="/Details">BADMINTON SHORTS</a></li>
                </ul>
           </li>
           <li> <a href="/ScoreBoard">SCOREBOARD</a>               
           </li>
           <li> <a href="/CartDetails">CUSTOMIZATION</a></li>
        </ul>
        </nav>
        </header>
    </Container>
   
         <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        style={{width: '90%'}}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move', width: '100%', backgroundColor: 'aqua' }} id="draggable-dialog-title">
          <Container>
          Login
          <img src={closewindow} onclick = {this.handleClose} style={{width: '4%',float: 'right', cursor: 'pointer'}} />
          </Container>
        </DialogTitle>
        <DialogContent>
          <input type='text' placeholder="Enter Email/Mobile No" style={{padding: '8px 10px 10px 0',marginTop: '4%',width: '100%',color: '#000',fontSize: 'inherit',background: '#fff',border: 'none',borderBottom: '1px solid #e0e0e0'}} />
          <input type='text' placeholder="Enter Password" style={{padding: '8px 10px 10px 0',marginTop: '4%',width: '100%',color: '#000',fontSize: 'inherit',background: '#fff',border: 'none',borderBottom: '1px solid #e0e0e0'}} />
          <a href="" style={{float: 'right'}}>Forgot?</a>
          <Button style={{width: '100%',height: '50px',marginTop: '4%',backgroundColor: 'coral'}}>Login</Button>
          <div style={{marginTop: '4%'}}><label style={{marginLeft: '48%'}}>OR</label></div>
          <Button style={{width: '100%',height: '50px',marginTop: '4%',backgroundColor: 'aliceblue'}}>Request OTP</Button>
        </DialogContent>
        <DialogActions>
           <a href="" style={{marginRight: '39%',marginTop: '5%',textDecoration: 'blink'}}>Create New Account</a>
        </DialogActions>
      </Dialog>
      <Switch>
      <Route component={Home} exact path="/" />
      <Route  path="/Details" render={(props) => <ClothesDetails {...props} fetchDetails={this.state.cardInfo} />} />
      <Route component={CartDetails} path="/CartDetails" />
      <Route component={ScoreBoard} path="/ScoreBoard" />
      </Switch>
      </div>

	)
}

}

export default App;
