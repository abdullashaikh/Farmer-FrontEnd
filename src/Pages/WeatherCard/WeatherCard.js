import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
  const { name, main, weather: weatherDetails } = weather;
  const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>Weather Details</h2>
      <div className="weather-info">
        <img src={weatherIconUrl} alt={weatherDetails[0].description} className="weather-icon" />
        <div>
          <p><strong>Location:</strong> {name}</p>
          <p><strong>Temperature:</strong> {main.temp}°C</p>
          <p><strong>Condition:</strong> {weatherDetails[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
