import React, {useState} from 'react';
import {Col} from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';





const ProductList = () => {

    const [products, setProducts] = useState([
        {
            id: 1,
            name:'Levis shirt',
            category: 'Men Clothes',
            price: '40'
        },
        {
            id: 2,
            name:'Levis jeans',
            category: 'Men Clothes',
            price: '40'
        },
        {
            id: 3,
            name:'Levis shirt',
            category: 'Men Clothes',
            price: '20'
        },
        {
            id: 4,
            name:'Levis shirt',
            category: 'Men Clothes',
            price: '30'
        },
    ])

    const list = products.map((product) => (
    <div class="item">
     <Col >
    <img style={{width:'100%'}} src={require(`../assets/images/${product.id}product.png`)}/>
    <p style={{margin:'0', fontSize:'1.2rem', fontWeight:'500'}}>{product.name}</p>
      <p style={{margin:'0', color:'#C0C0C0'}}>{product.category}</p>
      <span style={{color:'#22aea5', fontWeight:'bold'}}>{product.price}</span>
    </Col>
    </div>
    ))

    return (
       
    <OwlCarousel
        className="owl-theme"
        loop
        autoplay
        items={3}
        margin={7}
        nav
        lazyLoad
        dotsEach
    >
        {list}
    </OwlCarousel>
    )

}

export default ProductList

