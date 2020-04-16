import React from 'react'
import { Row, Image, Col, Container } from 'react-bootstrap';
import Arrow from '../shared/components/Arrow';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

const Heading = props => {
    return (
        <Row>
           
            <header className='heading'>
                <div style={{width:'47%', margin:'5% 11.5%'}}>
                    <h1 className='headerText' style={{fontWeight:'900', fontSize:'3.5rem', marginBottom:'3rem'}}>WE ARE MORE THAN A BUSINESS</h1>
                    <p style={{fontWeight:'400', fontSize:'1.5rem', color:'#fff', marginBottom:'3rem'}}>we are more than a business, we ar an en extend family of young, open minded, ambitious and always enthusiastic experts with various background. </p>
                    <Arrow icon={faChevronCircleDown}/>
                </div>
            </header>
        </Row>        
    )
}

export default Heading
