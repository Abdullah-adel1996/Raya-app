import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Composition from './Composition';
import Paragraph from './Paragraph';


const About = () => {
    return (
        <Container>
            <Row style={{height:'40rem'}}>
                <Col xs={12} md={6}>
                    <Composition/>
                </Col>
                <Col xs={12} md={{ span: 5, offset: 1 }} >
                    <Paragraph/>
                </Col>
            </Row>
         </Container>
    )
}

export default About
