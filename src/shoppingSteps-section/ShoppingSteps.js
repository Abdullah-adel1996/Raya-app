import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Step from './Step';
import Typography from '../shared/components/Typography';
import { faShoppingCart, faShoppingBag, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';


const ShoppingSteps = props => {
    return (
        <Container>
            <Row style={{marginBottom:'2rem'}}>
                <Typography 
                heading={"HOW IT WORKS?"}
                 paragraph={"Browse our site now and buy what you want in a shared basket"}
                 />
            </Row>
            <Row style={{marginBottom:'2rem'}}>
                <Step icon={faShoppingBag} stepNum={"step.1"} stepText={"open any brand website"}/>
                <Step icon={faShoppingCart} stepNum={"step.2"} stepText={"add product to your cart"}/>
                <Step icon={faShoppingBasket} stepNum={"dtep.3"} stepText={"pay and get your product"}/>
            </Row>
        </Container>
    )
}



export default ShoppingSteps
