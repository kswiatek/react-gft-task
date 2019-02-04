//enzyme tu nie jest potrzebny bo nie renderujemy żandego reactowego componenta
import reducer from './reducer';
import * as actionTypes from '../actions';

describe('global reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({    //1st crucial thing to test - żeby zwracał initial state poprawnie na początek
            userIp: null,
            userLong: null,
            userLat: null,
            customLong: null,
            customLat: null,
            weatherData: null,
            customWeatherData: null,
        });
        //initial state undefined and no specific action
    });

    it('should store user ip, lat, long', () => {
        expect(reducer({
            userIp: null,
            userLong: null,
            userLat: null,
            customLong: null,
            customLat: null,
            weatherData: null,
            customWeatherData: null,
        }, {
                type: actionTypes.SET_LOCATION,
                payload: {
                    ip: 'some-ip',
                    lat: 'some-lat',
                    long: 'some-long'
                }

            }
        )).toEqual({
            userIp: 'some-ip',        //żeby on ustawił do stanu to samo co przekazujemy w payloadzie
            userLong: 'some-long',
            userLat: 'some-lat',
            customLong: null,
            customLat: null,
            weatherData: null,                   //a to niech zostanie bo w payloadzie teog nie ma
            customWeatherData: null,
        });
    });



});