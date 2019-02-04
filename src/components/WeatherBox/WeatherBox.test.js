import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import WeatherBox from './WeatherBox';


configure({ adapter: new Adapter() });

describe('<WeatherBox />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<WeatherBox weatherData={{}} />);
    });

    it('the number of elements from the weatherData prop should equal the number of <p> tags, ', () => {
        let pArray = wrapper.find('p');
        let correct = pArray.length === 3 ? true : false;
        expect(correct).toEqual(true);
    });

    it('every <p> must not be null, undef or an empty string', () => {
        wrapper.find('p').forEach((p) => { expect(p.children().length).toBeGreaterThan(0); });
    });

    it('should render all the elements from weatherData prop', () => { //jak dojdą nowe np. propsy od pogody to test do aktualizacji
        let weatherData = { temp: 111, press: 22, hum: 33 };
        wrapper.setProps({ weatherData: weatherData });
        expect(wrapper.contains(111)).toEqual(true);
        expect(wrapper.contains(22)).toEqual(true);
        expect(wrapper.contains(33)).toEqual(true);
    });

});
