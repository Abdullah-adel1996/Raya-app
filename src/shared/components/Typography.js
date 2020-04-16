import React from 'react'

const Typography = props => {
    return (
            <div>
            <h3 style={{fontWeight:'700'}}>{props.heading}</h3>
            <p style={{fontWeight:'500'}}>{props.paragraph}</p>
            </div>
    )
}

export default Typography
