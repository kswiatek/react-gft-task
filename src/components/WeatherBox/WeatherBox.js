import React from 'react';
import './WeatherBox.css';

const WeatherBox = (props) => {
    return (<div className="weatherBox">
        <p>Today the temperature is {props.weatherData.temp} Celsius degrees</p>
        <p>Pressure equals {props.weatherData.press} hPa</p>
        <p>Humidity is {props.weatherData.hum} %</p>
    </div>);
}

export default WeatherBox;