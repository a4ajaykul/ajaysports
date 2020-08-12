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
import _ from 'lodash';


const slideImages = [
  footballBanner,
  cricketBanner,
  badmintonBanner,
  volleyballBanner,
  basketballBanner,
  scoreboardBanner
];

const cardInfo =[
{image: offerZone, title: "Offer Zone", text: "textfootballBanner"},
{image: latestNews, title: "Latest News", text: "textcricketBanner"},
{image: feedback, title: "Feedback", text: "textbadmintonBanner"}

];

const renderCard = (card, index) => {
    return(
     <Card style={{width: "100%"}} key={index}>
     <Card.Img variant="top" style={{width: "100%"}} src={card.image}/>
     <Card.Body>
     <Card.Title>{card.title}</Card.Title>
     <Card.Text>{card.text}</Card.Text>
     </Card.Body>
     </Card>
	)
}



class Home extends React.Component {

constructor(props,context){
	super(props,context);
    
    this.state ={
    open: false
	}
}

render(){
	return(
	<div>
	 <Container>
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}> 
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>     
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div> 
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            </div>
          </div> 
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
            </div>
          </div> 
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
            </div>
          </div> 
        </Slide>
    </Container>
		
        <Container style={{marginTop: '2%',marginLeft: '1%',marginRight: '1%'}}>
        <div class="grid-container">
        {cardInfo.map(renderCard)}
        </div>
        </Container>
	</div>
	)

	}

}
export default Home;