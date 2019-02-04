import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import ShowForCustomLocation from './ShowForCustomLocation';

const mapStateToProps = state => {
    return {
        customLat: state.customLat,
        customLong: state.customLong,
        customWeatherData: state.customWeatherData,
        userLong: state.userLong,
        userLat: state.userLat
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLocationSet: (lat, long) => dispatch({
            type: actionTypes.SET_CUSTOM_LOCATION,
            payload: {
                customLat: lat,
                customLong: long
            }
        }),
        onWeatherDataReceived: (weatherData) => dispatch({
            type: actionTypes.SET_CUSTOM_WEATHER_DATA,
            payload: {
                temp: weatherData.main.temp,
                press: weatherData.main.pressure,
                hum: weatherData.main.humidity
            }
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowForCustomLocation);