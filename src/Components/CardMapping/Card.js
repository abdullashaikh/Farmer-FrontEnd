import React from 'react';
import './CardMapping.css';

const CardMapping = ({ soilTypeName, soilImage, crops }) => {
    return (
        <div className="card-container">
            <img
                src={`https://backend-377w.vercel.app/public/uploads/${soilImage}`}
                alt="Soil Image"
                className="card-image"
            />
            <div className="card-content">
                <h5 className="card-title">{soilTypeName}</h5>
                <div className="crop-list-container">
                    {crops.map((crop, index) => (
                        <div key={index} className="crop-item">
                            <div className="crop-name-tag">{crop.cropName}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardMapping;
