import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import {productPhoto} from '../assets/images/1Model.png'

const ProductCard = props => {
    return (
        <Col md={3}>
            <img style={{width:'100%'}}  src={require(`../assets/images/1Model.png`)}/>
            <p>product name</p>
            <p>mens clothes</p>
            <p>202020202</p>
        </Col>
    )
}

export default ProductCard
