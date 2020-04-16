import React from 'react';
import { Container, Row, InputGroup, Button, FormControl } from 'react-bootstrap';
import raLogo from '../assets/images/raLogo.png';

const  Footer = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <h1 style={{fontSize:'1.5rem', fontWeight:'700'}}>SUBSCRIBE TO RA SPORT NEWSLETTER</h1>
            </Row>
            <Row style={{marginTop:'1rem'}} className="justify-content-center">
            <InputGroup style={{width:'60%'}} className="mb-3">
                <FormControl
                placeholder="Your E-mail Address"
                aria-label="Your E-mail Address"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                <Button variant="outline-secondary">Sign up</Button>
                </InputGroup.Append>
            </InputGroup>
            </Row>
            <Row style={{marginTop:'1rem'}} className="justify-content-center">
                <img src={raLogo}/>
            </Row>
        </Container>
    )
}


export default Footer

