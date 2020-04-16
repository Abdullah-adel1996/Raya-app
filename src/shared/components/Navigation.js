import React from 'react';
import {Button, Row, Navbar, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import raLogo from '../../assets/images/raLogo.png'

const Navigation = () => {
 return (
<Row className="justify-content-center">
     <Navbar bg="#fff" expand="lg">
        <Navbar.Brand href="#home"><img src={raLogo} alt={'Raya'}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto justify-content-center">
      <Nav.Link href="#home"><FontAwesomeIcon style={{color:'#22aea5', fontSize:'1rem'}} icon={faShoppingCart} /></Nav.Link>
      <Nav.Link href="#Brands">Brands</Nav.Link>
      <Nav.Link href="#About Ra">About Ra</Nav.Link>
      <Nav.Link href="#Stories">Stories</Nav.Link>
      <Nav.Link href="#link">How it Works</Nav.Link>
      <Nav.Link href="#link">Ra News</Nav.Link>
      <Nav.Link href="#link">Contact us</Nav.Link>
      <Nav.Link href="#link">Join us</Nav.Link>
      <Nav.Link href="#link"><Button 
       style={{color:'#000', width:'7rem', height:'2.5rem', fontWeight:'500', marginTop:'-5px'}} 
              variant="outline-info">
                Login
         </Button>{' '}</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
</Row>
    )
}

export default Navigation;


