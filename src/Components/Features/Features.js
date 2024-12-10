import React from "react";
import "./Features.css";
import { Link } from "react-router-dom";

const Features = () => {
    return (
        <div className="features">
            <div className="features-container">
                {/* Marketplace Section */}
                <div className="features-section">
                    <h1 className="features-title">Crop Information</h1>
                    <p className="features-text">
                        Crop data contains crop name, images, and its summary. List of crops are visible to the farmers with crop images and it's characteristics.
                    </p>
                    <Link to="/crops" className="features-link">Learn More</Link>
                </div>

                {/* News Section */}
                <div className="features-section">
                    <h1 className="features-title">Soil Information</h1>
                    <p className="features-text">
                        Soil data contains soil type, images, and its summary. List of soil types are visible to the farmers with soil image and it's characteristics.
                    </p>
                    <Link to="/soil" className="features-link">Learn More</Link>
                </div>

                {/* Crop Information Section */}
                <div className="features-section">
                    <h1 className="features-title">Crop & Soil Mapping</h1>
                    <p className="features-text">
                        The mapping of crops and soil are displayed as a list of related crop names according to soil type. The system provides recommendations to the farmers for suitable crops.
                    </p>
                    <Link to="/crop" className="features-link">Learn More</Link>
                </div>

                {/* Policy Section */}
                <div className="features-section">
                    <h1 className="features-title">Weather</h1>
                    <p className="features-text">
                        Weather information include temperature, precipitation in terms of rain or snow, humidity in terms of moisture in the air, which can influence weather conditions and comfort, wind speed, and other relevant data.
                    </p>
                    <Link to="/weather" className="features-link">Show Weather</Link>
                </div>

                {/* Schedule Services */}
                <div className="features-section">
                    <h1 className="features-title">Contact Us</h1>
                    <p className="features-text">
                        Email - muhammadshaikh4203@gmail.com
                        Phone - +91-7990521332
                    </p>
                    <Link to="/services" className="features-link">Contact Us</Link>
                </div>
            </div>
        </div>
    );
}

export default Features;