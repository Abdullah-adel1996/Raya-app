import React from 'react';
import { Col, Row, Button, Img } from 'react-bootstrap';


const BrandCard = props => {

{console.log(props.id)}
        let card = props.isTextRight === true?

    <Col xs={12} md={6}>
        <Row>
            <Col style={{padding:'0'}} xs={6}>
                <img style={{width:'100%'}} src={require(`../assets/images/${props.id}Model.png`)}/>
           </Col>
           <Col 
           style={{backgroundColor:'#c41c2c', display:'flex', flexDirection:'column',
            justifyContent:'space-between', padding:'1rem'}} xs={6}>
             <img  src={require(`../assets/images/levLogo.png`)} style={{width:'4rem', hight: '4rem'}}/>
             <p 
             style={{color:'#fff'}}>
                 {props.description} 
             </p>
         <Row>
           <Col xs={6}>
              <Button 
                style={{backgroundColor:'#fff', color:'#000', padding:'7px', width:'9rem'}} 
                variant="light">Let's shopping
              </Button>
           </Col>
           <Col xs={6}>
               <Button style={{color:'#fff'}}
                variant="link">our story
               </Button>
            </Col>
             </Row>
            </Col>
           </Row>
        </Col>
        :
        <Col xs={12} md={6} >
                <Row>
                   <Col  xs={6}
                   style={{backgroundColor:'#000', display:'flex', flexDirection:'column',
                    justifyContent:'space-between', padding:'1rem'}}>
                     <img src={require(`../assets/images/levLogo.png`)} style={{width:'4rem', hight: '4rem'}}/>
                     <p 
                     style={{color:'#fff'}}>
                         {props.description} 
                     </p>
                 <Row>
                   <Col xs={6}>
                      <Button 
                            style={{backgroundColor:'#fff', color:'#000', padding:'7px', width:'9rem'}} 
                            variant="light">Let's shopping
                      </Button>
                   </Col>
                   <Col xs={6}>
                       <Button style={{color:'#fff'}}
                        variant="link">our story
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

export default BrandCard
