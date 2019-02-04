import { connect } from "react-redux";
import * as actionTypes from '../../store/actions';
import ShowWeather from './ShowWeather';
import './ShowWeather.css';

const mapStateToProps = state => {
    return {
        userIp: state.userIp,
        userLat: state.userLat,
        userLong: state.userLong,
        weatherData: state.weatherData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIpReceived: (ip, lat, long) => dispatch({
            type: actionTypes.SET_LOCATION,
            payload: {
                ip: ip,
                lat: lat,
                long: long
            }
        }),
        onWeatherDataReceived: (weatherData) => dispatch({
            type: actionTypes.SET_WEATHER_DATA,
            payload: {
                temp: weatherData.main.temp,
                press: weatherData.main.pressure,
                hum: weatherData.main.humidity
            }
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowWeather); //TEN ma connect, to container i zajmie się state, importując ten shwoWeatehr.js