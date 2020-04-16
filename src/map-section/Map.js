import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Text from './Text';
import DrobDown from './DrobDown';
import GoogleMapReact from 'google-map-react';


class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  render () {

  return (
    <React.Fragment>
    <Container fluid>
      <Row className="justify-content-center">
       <Text/>
      </Row>
      <Row style={{marginBottom:'2rem'}} className="justify-content-center">
        <DrobDown/>
      </Row>
    </Container>
    <Row style={{width:'100%',height:'80vh'}}>
    <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
    </Row>
    </React.Fragment>
  )
}
}

export default Map
