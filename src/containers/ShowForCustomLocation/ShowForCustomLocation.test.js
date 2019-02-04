import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import ShowForCustomLocation from './ShowForCustomLocation';
import WeatherBox from '../../components/WeatherBox/WeatherBox';
import LocationBox from '../../components/LocationBox/LocationBox';

configure({ adapter: new Adapter() });

describe('<ShowForCustomLocation />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ShowForCustomLocation />);
    });

    it('always renders an overwrapping div', () => {
        const divs = wrapper.find('div');
        expect(divs.length).toBeGreaterThan(0);
        expect(divs.first().children()).toEqual(wrapper.children());
    });

    it('should render weather data box when customWeatherData prop received', () => {
        //nie mogę tu dać setProps bo będzie Cannot set property 'value' of null...
        expect(wrapper.find(WeatherBox)).toHaveLength(0);
        wrapper = shallow(<ShowForCustomLocation customWeatherData={5} />);
        expect(wrapper.find(WeatherBox)).toHaveLength(1);
    });



});
