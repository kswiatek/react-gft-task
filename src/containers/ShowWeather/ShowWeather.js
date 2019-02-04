import React, { Component } from "react";
import axios from 'axios';
import ShowForCurrentLocation from '../ShowForCurrentLocation/ShowForCurrentLocation';
import ShowForCustomLocationContainer from '../ShowForCustomLocation/ShowForCustomLocationContainer';
import './ShowWeather.css';

const apiId = '68149b806bed7191846bf13a51e7d573';

class ShowWeather extends Component {

    getCurrentLocationByIP() {
        axios.get('https://ipapi.co/json/').then(response => {
            this.props.onIpReceived(response.data.ip, response.data.latitude, response.data.longitude);
            this.getWeatherData();
        });
    }

    getWeatherData() {
        axios.get(
            `http://api.openweathermap.org/data/2.5/weather?`, {
                params: {
                    lat: this.props.userLat,
                    lon: this.props.userLong,
                    appid: apiId,
                    units: "metric"
                }
            }
        ).then(response => this.props.onWeatherDataReceived(response.data));
    }

    componentDidMount() {
        this.getCurrentLocationByIP();
    }

    render() {
        return (
            <div className="showWeather__mainContainer">
                <h2>Weather for your location:</h2>
                <ShowForCurrentLocation
                    ip={this.props.userIp}
                    lat={this.props.userLat}
                    long={this.props.userLong}
                    weatherData={this.props.weatherData} />
                <hr />
                <h2>Weather for choosen location:</h2>
                <ShowForCustomLocationContainer
                    apiId={apiId} />
            </div>
        );
    }
}

export default ShowWeather; //drugi będzie miał connect, to będzie container i zajmie się state, importując ten ShowWeather.js
