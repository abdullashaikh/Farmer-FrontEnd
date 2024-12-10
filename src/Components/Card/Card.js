import * as React from 'react';
import "./Card.css";

// 

const Card = props => {
    return (

        <div className="card">
            <img
                // src={`Images/${props.image}`}
                // src={`Images/${props.image}`}
                src={`https://backend-377w.vercel.app/public/uploads/${props.image}`}
                alt="Image Not Found"
                className="card-img"
            />
            <div className="card-content">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text" title={props.summary.length > 180 && props.summary}>
                    {props.summary.length > 180 ? props.summary.substring(0, 180) + '...': props.summary}
                </p>
            </div>
            <div className="card-actions">
                <button className="card-button">Share</button>
                <button className="card-button">Learn More</button>
            </div>
        </div>
    )
}

export default Card;