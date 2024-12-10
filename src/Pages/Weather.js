import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import axios from "axios";
import WeatherCard from "./WeatherCard/WeatherCard";
import WeatherMap from "./WeatherCard/WeatherMap";
import './Weather.css'
import WeatherForecast from "./WeatherCard/WeatherForecast ";
const Weather = () => {

    const [weather, setWeather] = useState(null);
    useEffect(() => {
        getGeolocation()
            .then(({ latitude, longitude }) => {
                return fetchWeather(latitude, longitude);
            })
            .then(weatherData => {
                console.log(weatherData, 'weatherData');
                setWeather(weatherData);
            })
            .catch(error => {
                console.error('Error getting location or weather data:', error);
            });
    }, []);
    const getGeolocation = () => {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        resolve({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        });
                    },
                    (error) => {
                        switch (error.code) {
                            case error.PERMISSION_DENIED:
                                reject(new Error("User denied the request for Geolocation."));
                                break;
                            case error.POSITION_UNAVAILABLE:
                                reject(new Error("Location information is unavailable."));
                                break;
                            case error.TIMEOUT:
                                reject(new Error("The request to get user location timed out."));
                                break;
                            case error.UNKNOWN_ERROR:
                                reject(new Error("An unknown error occurred."));
                                break;
                            default:
                                reject(new Error("An unknown error occurred."));
                        }
                    }
                );
            } else {
                reject(new Error("Geolocation is not supported by this browser."));
            }
        });
    };

    const fetchWeather = async (latitude, longitude) => {
        const API_KEY = '88004671bc510d7f0328f2e6feea5ec1';
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error("Error fetching weather data:", error);
            throw error;
        }
    };
    return (
        <>
            <Header />
            <div className="weather-container">
                {weather && (
                    <div className="weather-content">
                        <WeatherCard weather={weather} />
                        <WeatherMap latitude={weather.coord.lat} longitude={weather.coord.lon} />
                        {/* <WeatherForecast latitude={weather.coord.lat} longitude={weather.coord.lon} /> */}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default Weather;
