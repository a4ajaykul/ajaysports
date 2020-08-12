import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import one from './footballjersey/1.jpg';
import two from './footballjersey/2.png';
import three from './footballjersey/3.png';
import four from './footballjersey/4.jpg';


const cardInfo = [
        {image: one,deliveryDate: "8-10", title: "ATK FANS JERSEY",finalprice: "270",previousprice: "300",discount: "10", itemDetails: ["Well Stitched","Standard Size(S-M-XL)","Cotton/Polyster"]},
{image: two,deliveryDate: "8-10", title: "BENGALURU FC FANS JERSEY",finalprice: "270",previousprice: "300",discount: "10", itemDetails: ["Well Stitched","Standard Size(S-M-XL)","Cotton/Polyster"]},
{image: three,deliveryDate: "8-10", title: "BRAZIL NATIONAL FOOTBALL TEAM JERSEY",finalprice: "270",previousprice: "300",discount: "10", itemDetails: ["Well Stitched","Standard Size(S-M-XL)","Cotton/Polyster"]},
{image: four,deliveryDate: "8-10", title: "EAST BENGAL FC FANS JERSEY",finalprice: "270",previousprice: "300",discount: "10", itemDetails: ["Well Stitched","Standard Size(S-M-XL)","Cotton/Polyster"]}  
		  ];


const renderCard = (card, index) => {
return(
<Card style={{backgroundColor: 'lavender', width: '100%',marginTop: '1%',height: '170px'}}>
<Row>
<Col xs={4} md={4} style={{width: '20%', float: 'left'}}>
<Card.Img variant="top" style={{width: '100%', marginTop: '4%',marginLeft: '4%', height: '155px'}}  src={card.image}/>
</Col>
<Col xs={4} md={4} style={{width: '80%',marginTop: '1%',float: 'left'}}>
<Card.Title style={{fontSize: 'large', marginLeft: '2%'}}>{card.title}</Card.Title>
<Card.Title style={{marginLeft: '2%', fontSize: 'small', marginTop: '2%'}}>{"Delivery in "+card.deliveryDate+ " days"}</Card.Title>
<Card.Body style={{marginTop: '6%',marginLeft: '2%'}}>
<span style={{fontStyle: 'italic',fontWeight: 'bold',fontSize: '150%',color: 'blue'}}>₹
     <span>{card.finalprice}</span>
     </span>
     <span style={{textDecoration: 'line-through',textDecorationcolor: 'red', fontSize: '100%',marginLeft: '2%'}}>₹
     <span>{card.previousprice}</span>
     </span>
     <span style={{marginLeft: '2%',color: 'green',fontStyle: 'italic'}}>{card.discount}
     <span>%Off</span>
     </span>
</Card.Body>
</Col>
</Row>
</Card>
)
}

class CartDetails extends React.Component {

constructor(props,context){
	super(props,context);
    
    this.state ={
    open: false,
	cartCount: 4,
	itemPrice: 1080,
	deliveryFee: 40,
	discount: 0,
	totalAmount: 1120
	}

	this.handlePlaceOrder= this.handlePlaceOrder.bind(this);
}


handlePlaceOrder(){
    this.setState({
            open : true
        });

}


render(){
	return(
	<div>
    <Container className={this.state.open ? 'hidden' : ''} style={{width: '90%',marginLeft: '5%',marginTop: '3%'}}>
	<Row>
    <Col xs={4} md={4} style={{width: '60%', float: 'left'}}>
	<Card style={{backgroundColor: 'lavender', height: '60px'}}>
	<Card.Body>
	<h2>{"My Cart ("+this.state.cartCount+")"}</h2>
	</Card.Body>
	</Card>
	{cardInfo.map(renderCard)}
	</Col>
	<Col xs={4} md={4} style={{width: '39%', marginLeft: '1%', float: 'left'}}>
	<Card style={{backgroundColor: 'lavender', height: '415px'}}>
	<Card.Title>PRICE DETAILS</Card.Title>
	<hr style={{marginTop: '7%',width: '90%',marginLeft: '5%'}} />
	<Row style={{margin: '6%'}}>
	<Col style={{width: '50%', float: 'left'}}>
	<label>{"Price ("+this.state.cartCount+" items)"}</label>
	</Col>
	<Col style={{float: 'right', marginRight: '10%'}}>
	<label>{"₹"+this.state.itemPrice}</label>
	</Col>
	</Row>
	<Row style={{margin: '6%', marginTop: '18%'}}>
	<Col style={{width: '50%', float: 'left'}}>
	<label>Delivery Fee</label>
	</Col>
	<Col style={{float: 'right', marginRight: '10%'}}>
	<label>{"₹"+this.state.deliveryFee}</label>
	</Col>
	</Row>
	<Row style={{margin: '6%', marginTop: '30%'}}>
	<Col style={{width: '50%', float: 'left'}}>
	<label>Discount</label>
	</Col>
	<Col style={{float: 'right', marginRight: '10%'}}>
	<label>{"₹"+this.state.discount}</label>
	</Col>
	</Row>
	<hr style={{marginTop: '40%',width: '90%',marginLeft: '5%'}} />
	<Row style={{margin: '6%'}}>
	<Col style={{width: '50%', float: 'left'}}>
	<label>Total</label>
	</Col>
	<Col style={{float: 'right', marginRight: '10%'}}>
	<label>{"₹"+this.state.totalAmount}</label>
	</Col>
	</Row>
	<hr style={{marginTop: '16%',width: '90%',marginLeft: '5%'}} />
	<Button style={{float: 'right',width: '40%',cursor: "pointer",height: '45px',marginRight: '10%',marginTop: '4%',backgroundColor: 'orange',fontWeight: 'bolder',fontSize: 'medium'}} onClick={this.handlePlaceOrder}>PLACE ORDER</Button>
    </Card >
	</Col>
	</Row>
	</Container>
	<Container className={this.state.open ? '' : 'hidden'} style={{width: '90%',marginLeft: '5%',marginTop: '3%'}}>
	<Row>
    <Col xs={4} md={4} style={{width: '60%', float: 'left'}}>
	<Card style={{backgroundColor: 'lavender', height: '60px'}}>
	<Card.Body>
	<h2>{"My Cart ("+this.state.cartCount+")"}</h2>
	</Card.Body>
	</Card>
	</Col>
	</Row>
	</Container>
	</div>
	)

}

}


export default CartDetails;