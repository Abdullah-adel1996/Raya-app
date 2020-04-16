import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const Paragraph = props => {
    return (
        <div 
        style={{
         paddingTop:'11rem', 
         paddingBottom:'11rem',
          }} >
            <h3 
            style={{fontWeight: 'bold', fontSize:'2rem', marginBottom:'2rem'}}>
            <span style={{color:'#22aea5'}}>WE ARE</span> MORE THAN <br/>A BUSINESS
            </h3>
            <p style={{marginBottom:'1.5rem'}}>
                we are more than a business, we ar an en extend family of young, open minded, ambitious and always enthusiastic experts with various background. 
                we are more than a business, we ar an en extend family of young, open minded, ambitious and always enthusiastic experts with various background.
            </p>
            <Button style={{float: 'left', color:'#000', padding:'0'}}
              variant="link">Learn more <FontAwesomeIcon style={{verticalAlign:'-5px', marginLeft:'5px', fontSize:'1.5rem', }} icon={faLongArrowAltRight}/>
             </Button>
 
         </div>
    )
}

export default Paragraph
