import React from 'react';

const Data = (props) => {
    return (
        <div className="data">
            {props.city && props.country && <p><span>City:</span> {props.city} <span>Country:</span> {props.country}</p>}
            {props.temperature &&<p><span>Temperature: </span>{props.temperature}</p>}
            {props.humidity &&<p><span>Humidity:</span> {props.humidity}</p>}
            {props.description &&<p><span>Conditions: </span>{props.description}</p>}
            {props.error &&<p>{props.error}</p>}
        </div>
    )
}

export default Data