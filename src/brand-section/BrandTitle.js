import React from 'react';
import Arrow from '../shared/components/Arrow';
import Typography from '../shared/components/Typography';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import {Container, Row, Col} from 'react-bootstrap';

const BrandTitle = props => {
    return (
        <div style={{marginTop:'2rem'}}> 
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={8}>
              <Typography 
              heading={'LETS SHOPPING BY BRAND'} 
              paragraph={'Browse our site nowand buy what you want in a shared basket'}/>
            </Col>
             <Col style={{textAlign:'center'}} lg={4} md={4}>
              <Arrow icon={faChevronCircleRight}/>
             </Col>
            </Row>
        </Container>
        </div>
    )
}

export default BrandTitle
