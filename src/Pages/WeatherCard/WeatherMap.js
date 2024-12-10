import React from 'react';

const WeatherMap = ({ latitude, longitude }) => {
  const mapUrl = `https://openweathermap.org/weathermap?basemap=map&cities=false&layer=temperature&lat=${latitude}&lon=${longitude}&zoom=8`;

  return (
    <div className="weather-map">
      <iframe
        title="Weather Map"
        width="50%"
        height="500"
        frameBorder="0"
        scrolling="no"
        src={mapUrl}
      />
    </div>
  );
};

export default WeatherMap;
