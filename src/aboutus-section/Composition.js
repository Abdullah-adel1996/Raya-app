import React from 'react';
import bigImage from '../assets/images/bigImage.png';
import smallImage from '../assets/images/smallImag.png';

const Composition = props => {
    return (
        <div className='compose'>
            <img className='bigImg' src={bigImage}/>
            <img className='smallImg' src={smallImage}/>
        </div>
    )
}

export default Composition
