import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'




const renderCard = (card, index) => {
    return(
     <Card style={{width: "100%", border: 'ridge', backgroundColor: 'ghostwhite', height: 'fit-content'}} key={index}>
     <Card.Img variant="top" style={{width: "100%", height: '350px'}} src={card.image}/>
     <Card.Body>
     <Card.Title style={{fontSize: 'x-large', marginLeft: '2%'}}>{card.title}</Card.Title>
     <Container>
     <Row style={{width: '100%',display: 'inline-flex'}}>
     <Col xs={6} style={{width: '70%'}}>
     <ul style={{marginLeft: '10%',listStyle: 'disc',marginBottom: '5%'}}>
    <li>{card.itemDetails[0]}</li>
    <li>{card.itemDetails[1]}</li>
    <li>{card.itemDetails[2]}</li>
     </ul>
     </Col>
     <Col xs={6} style={{width: '30%'}}>
     <span style={{fontStyle: 'italic',fontWeight: 'bold',fontSize: '35px',color: 'blue'}}>₹
     <span>{card.finalprice}</span>
     </span>
     <br/>
     <span style={{textDecoration: 'line-through',textDecorationcolor: 'red'}}>₹
     <span>{card.previousprice}</span>
     </span>
     <span style={{marginLeft: '12%',color: 'green',fontStyle: 'italic'}}>{card.discount}
     <span>%Off</span>
     </span>
     </Col>
     </Row>
     </Container>
     <Button style={{width: '100%',height: '40px',backgroundColor: 'bisque'}}>Add To Cart</Button>
     <Button style={{width: '100%',height: '40px',backgroundColor: 'coral'}}>Buy Now</Button>
     </Card.Body>
     </Card>
	)
}

class ClothesDetails extends React.Component {

constructor(props,context){
	super(props,context);
    
    this.state ={
    open: false
	}
}

render(){
	return(
	<div>
    
	<Container style={{marginTop: '2%',marginLeft: '1%',marginRight: '1%'}}>
        <div class="grid-container">
        {this.props.fetchDetails.map(renderCard)}
        </div>
        </Container>
	</div>
	)

}

}

export default ClothesDetails;