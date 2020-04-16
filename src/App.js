import React, {useState} from 'react';
import Navigation from './shared/components/Navigation';
import Heading from './header-section/Heading';
import BrandTitle from './brand-section/BrandTitle';
import BrandList  from './brand-section/BrandList'
import About from './aboutus-section/About';
import Map from './map-section/Map';
import ShoppingSteps from './shoppingSteps-section/ShoppingSteps';
import StoriesList from './stories-section/StoriesList';
import ProductList from './bestSeller-section/ProductList';
import BestSellerTitle from './bestSeller-section/BestSellerTitle';
import Footer from './footer-section/Footer';
import './App.css';






const App = () => {
  return (
    <React.Fragment>
      <Navigation/>
      <Heading/>
      <BrandTitle/>
      <br/>
      <BrandList/>
      <br/><br/><br/>
      <About/>
      <br/>
     <Map/>
     <br/>
     <BestSellerTitle/>
     <br/>
     <ProductList/>
     <br/>
     <ShoppingSteps/>
     <br/>
     <StoriesList/>
     <br/><br/>
     <Footer/>
    </React.Fragment>
  );
}

export default App;
