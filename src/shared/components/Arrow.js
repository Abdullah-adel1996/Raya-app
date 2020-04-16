import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Arrow = props => {
    return (
        <React.Fragment>
            <FontAwesomeIcon className="kj" style={{color:'#22aea5', fontSize:'4rem'}} icon={props.icon}/>
        </React.Fragment>
    )
}

export default Arrow;
