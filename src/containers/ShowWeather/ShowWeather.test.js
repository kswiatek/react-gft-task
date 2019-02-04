import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import ShowWeather from './ShowWeather';
import ShowForCurrentLocation from '../ShowForCurrentLocation/ShowForCurrentLocation';
import ShowForCustomLocationContainer from '../ShowForCustomLocation/ShowForCustomLocationContainer';

configure({ adapter: new Adapter() });

describe('<ShowWeather/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ShowWeather />); //to coś nie działa, jakiś network err, dałem commit i zadziałało
    });

    it('should always render <ShowForCurrentLocation />', () => {
        expect(wrapper.find(ShowForCurrentLocation)).toHaveLength(1);
    });

    it('should always render <ShowForCustomLocation />', () => {
        expect(wrapper.find(ShowForCustomLocationContainer)).toHaveLength(1);
    });

});