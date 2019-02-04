import React, { Component } from "react";   //nie można w classless comp dawać zmiennych?...
import '../ShowForLocation.css';
import WeatherBox from '../../components/WeatherBox/WeatherBox';

class ShowForCurrentLocation extends Component {

    locationBox = null;
    weatherDataBox = null;

    fillData() {
        if (this.props.ip) {
            this.generateLocationBox();
            this.weatherDataBox = <p>location received, waiting for data...</p>;
            if (this.props.weatherData) {
                this.generateWeatherDataBox();
            }
        }
    }

    generateLocationBox() {
        this.locationBox = (
            <div className="showForCurrentLocation__locationBox">Location:
                <p>Your IP is: {this.props.ip}</p>
                <p>Your latitude is: {this.props.lat}</p>
                <p>Your longitude is: {this.props.long}</p>
            </div>);
    }

    generateWeatherDataBox() {
        this.weatherDataBox = <WeatherBox weatherData={this.props.weatherData} />;
    }   //generate a nie get, bo tworzy JSX i daje go do lokalnej zmiennej a jej nie zwraca
    //jak getSth to powinny coś zwracać albo request inicjować

    render() {
        this.fillData();
        return (
            <div className="showForCurrentLocation__weatherContainer">
                {this.locationBox ? this.locationBox : <p>locating...</p>}
                {this.weatherDataBox}
            </div>
        );
    }
};

export default ShowForCurrentLocation;