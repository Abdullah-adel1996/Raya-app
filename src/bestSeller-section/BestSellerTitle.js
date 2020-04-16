import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Arrow from '../shared/components/Arrow';
import Typography from '../shared/components/Typography'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const BestSellerTitle =()=> {
    return (
        <div style={{marginTop:'2rem'}}> 
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <Typography 
              heading={'BEST SELLER PRODUCTS'} 
              paragraph={'Browse our site nowand buy what you want in a shared basket'}/>
            </Col>
             <Col style={{textAlign:'center'}} md={4}>
              <Arrow icon={faChevronCircleRight}/>
             </Col>
            </Row>
        </Container>
        </div>
    )
}


export default BestSellerTitle

