import React, { Component } from "react";
import '../ShowForLocation.css';
import axios from 'axios';
import WeatherBox from '../../components/WeatherBox/WeatherBox';
import LocationBoxContainer from '../../components/LocationBox/LocationBoxContainer';

class ShowForCustomLocation extends Component {

    locationBox = <LocationBoxContainer />;

    componentDidUpdate(prevProps) {
        if (!this.props.customLat) {
            this.setInitialLatLong();
        }
        if (this.props.customLat &&
            (this.props.customLat !== prevProps.customLat || this.props.customLong !== prevProps.customLong)) {
            this.getWeatherData();
        }
    };

    setInitialLatLong() {
        let longInput = document.getElementById("longInput");
        let latInput = document.getElementById("latInput");
        longInput.value = this.props.userLong;
        latInput.value = this.props.userLat;
        this.props.onLocationSet(this.props.userLat, this.props.userLong);
    }

    getWeatherData() {
        axios.get(
            `http://api.openweathermap.org/data/2.5/weather?`, {
                params: {
                    lat: this.props.customLat,
                    lon: this.props.customLong,
                    appid: this.props.apiId,
                    units: "metric"
                }
            }
        ).then(response => {
            this.props.onWeatherDataReceived(response.data);
        });
    }

    render() {
        return (
            <div className="showForCustomLocation__weatherContainer">
                {this.locationBox}
                {this.props.customWeatherData ? <WeatherBox weatherData={this.props.customWeatherData} /> : null}
            </div>
        );
    }

};

export default ShowForCustomLocation;