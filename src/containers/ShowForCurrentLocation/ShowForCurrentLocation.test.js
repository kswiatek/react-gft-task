import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import ShowForCurrentLocation from './ShowForCurrentLocation';
import WeatherBox from '../../components/WeatherBox/WeatherBox';

configure({ adapter: new Adapter() });

describe('<ShowForCurrentLocation />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ShowForCurrentLocation />);
    });

    it('always renders an overwrapping div', () => {
        const divs = wrapper.find('div');
        expect(divs.length).toBeGreaterThan(0);
        expect(divs.first().children()).toEqual(wrapper.children());
    });

    it('should render "locating..." if IP was not passed as a prop', () => {
        let ipToCheck = 543;
        expect(wrapper.contains(ipToCheck)).toEqual(false);
        expect(wrapper.contains("locating...")).toEqual(true);
    });

    it('should render location box if ip was passed as a prop and no "locating..." anymore', () => {
        let ipToCheck = 543;
        wrapper.setProps({ ip: ipToCheck });
        expect(wrapper.contains("Your IP is: ")).toEqual(true); //ten tekst jest jako textNode cały, dlatego bez spacji nie przechodzi
        expect(wrapper.contains(ipToCheck)).toEqual(true);
        expect(wrapper.contains("locating...")).toEqual(false);
    });

    it('should render weather data box when the weatherData prop has been received', () => {
        wrapper.setProps({ ip: 543, weatherData: 5 });
        expect(wrapper.find(WeatherBox)).toHaveLength(1);
    });

});
