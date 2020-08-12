import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

class CartDetails extends React.Component {

constructor(props,context){
	super(props,context);
    
    this.state ={
    open: false
	}
}

render(){
	return(
    <Container className={this.state.open ? 'hidden' : ''}>
	<Card style={{height: '300px', borderRadius: '30px',width: '30%', float: 'left', marginLeft: '15%',marginTop: '10%',border: 'ridge', backgroundColor: 'ghostwhite'}}>
	<Card.Body>
	<Button style={{width: '35%',marginLeft: '32%',cursor: 'pointer',height: '50px',marginTop: '30%',borderRadius: '40%',backgroundColor: 'darkblue',color: 'white',fontSize: '20px'}}>View</Button>
	</Card.Body>
	</Card>
	<Card style={{height: '300px', borderRadius: '30px',width: '30%', float: 'left', marginLeft: '15%',marginTop: '10%',border: 'ridge', backgroundColor: 'ghostwhite'}}>
	<Card.Body>
	<Button style={{width: '35%',marginLeft: '32%',cursor: 'pointer',height: '50px',marginTop: '30%',borderRadius: '40%',backgroundColor: 'darkblue',color: 'white',fontSize: '20px'}}>Add Team</Button>
	</Card.Body>
	</Card>
	</Container>
	)

}

}


export default CartDetails;