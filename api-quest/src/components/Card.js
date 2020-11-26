import React from 'react';

const Card = props => (
    <>
        <div className="content">
            <h1>{props.name}</h1>
            <img 
                src={props.picture}
                alt={props.name} 
            />
            <p>{props.text}</p>
        </div>  
    </>
)

export default Card;