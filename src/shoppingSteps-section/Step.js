import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Step = (props) => {
    return (
                <Col xs={12} md={4}>
                <FontAwesomeIcon style={{fontSize:'3rem', color:'#22aea5', marginBottom:'1rem'}} icon={props.icon}/>
                <span style={{fontWeight:'500', display:'block'}}>{props.stepNum}</span>
                <p style={{fontWeight:'700'}}>{props.stepText}</p>
                </Col>
                    )
}

export default Step

