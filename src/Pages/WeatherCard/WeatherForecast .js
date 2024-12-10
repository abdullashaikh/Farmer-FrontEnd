import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherForecast = ({ latitude, longitude }) => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const API_KEY = '88004671bc510d7f0328f2e6feea5ec1';
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly&appid=${API_KEY}&units=metric`;

    axios.get(url)
      .then(response => {
        setForecast(response.data);
      })
      .catch(error => {
        console.error('Error fetching forecast data:', error);
      });
  }, [latitude, longitude]);

  if (!forecast) {
    return <p>Loading forecast...</p>;
  }

  return (
    <div className="weather-forecast">
      <h2>8-Day Weather Forecast</h2>
      <div className="forecast-list">
        {forecast.daily.map((day, index) => (
          <div key={index} className="forecast-item">
            <p><strong>Date:</strong> {new Date(day.dt * 1000).toLocaleDateString()}</p>
            <p><strong>Temperature:</strong> {day.temp.day}°C</p>
            <p><strong>Description:</strong> {day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast ;
