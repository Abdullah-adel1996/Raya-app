import React, {useState, useEffect} from 'react';
import BrandCard from './BrandCard';
import {Row, Col} from 'react-bootstrap'

const BrandList = props => {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/brands").then(res => res.json()).then(data => setBrands(data))
      }, []);
      
      const list = brands.map( (brand) => (
          <BrandCard 
           key={brand.id}
           description={brand.description} 
           isTextRight={brand.isTextRight}
           id={brand.id}
            />
      ))
    return (
        <React.Fragment>
            <Row>
              {list}
            </Row>
        </React.Fragment>
    )
}

export default BrandList
