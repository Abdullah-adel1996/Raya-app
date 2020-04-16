import React from 'react';
import { Col, Row, Button, Img } from 'react-bootstrap';


const StoryCard = props => {

{console.log(props.id)}
        let card = props.isTextRight === true?

    <Col xs={12} md={6}>
        <Row>
            <Col style={{padding:'0'}} xs={6}>
                <img style={{width:'100%'}} src={require(`../assets/images/${props.id}Model.png`)}/>
           </Col>
           <Col xs={6}
           style={{backgroundColor:'#22aea5', display:'flex', flexDirection:'column',
            justifyContent:'space-between', padding:'1rem'}}>
             <h3
             style={{color:'#fff'}}>
                 {props.quote}
             </h3>
             <p 
             style={{color:'#fff'}}>
                 {props.description} 
             </p>
         <Row>
           <Col xs={6}>
              <Button 
                style={{backgroundColor:'#fff', color:'#000', padding:'7px', width:'9rem'}} 
                variant="light">Read more
              </Button>
           </Col>
             </Row>
            </Col>
           </Row>
        </Col>
        :
        <Col xs={12} md={6}>
                <Row>
                   <Col xs={6}
                   style={{backgroundColor:'#fff', display:'flex', flexDirection:'column',
                    justifyContent:'space-between', padding:'1rem'}}>
                    <h3
                    style={{color:'#000'}}>
                        {props.quote}
                    </h3>            
                    <p 
                     style={{color:'#000'}}>
                         {props.description} 
                     </p>
                 <Row>
                   <Col xs={6}>
                      <Button 
                            style={{backgroundColor:'#22aea5', color:'#fff', padding:'7px', width:'9rem'}} 
                            variant="light">Read more
                      </Button>
                   </Col>
                     </Row>
                </Col>
                    <Col style={{padding:'0'}} xs={6}>
                        <img style={{width:'100%'}} src={require(`../assets/images/${props.id}Model.png`)}/>
                   </Col>
                   </Row>
                </Col>
    return (
        <React.Fragment>
                {card}
        </React.Fragment>
    )
}

export default StoryCard
