import * as actionTypes from '../actions';

const initialState = {
    userIp: null,
    userLong: null,
    userLat: null,
    customLong: null,
    customLat: null,
    weatherData: null,     //może by przetestować czy te data zawierają temp, press, hum i coś tam jeszcze konkretnie
    customWeatherData: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOCATION:
            return {
                ...state,
                userIp: action.payload.ip,
                userLong: action.payload.long,
                userLat: action.payload.lat
            }
        case actionTypes.SET_CUSTOM_LOCATION:
            return {
                ...state,
                customLong: action.payload.customLong,
                customLat: action.payload.customLat
            }
        case actionTypes.SET_WEATHER_DATA:
            return {
                ...state,
                weatherData: action.payload
            }
        case actionTypes.SET_CUSTOM_WEATHER_DATA:
            return {
                ...state,
                customWeatherData: action.payload
            }
        default: return state;
    }
}

export default reducer;