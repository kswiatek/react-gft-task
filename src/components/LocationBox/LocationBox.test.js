import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import LocationBox from './LocationBox';


configure({ adapter: new Adapter() });

describe('<LocationBox />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<LocationBox />);
    });

    it('should return a div which contains two inputs type number', () => {
        expect(wrapper.find('input[type="number"]')).toHaveLength(2);   //ile się trzeba było naszukać żeby to znaleźć...
    });

});



/* szablon

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import LocationBox from './LocationBox';


configure({ adapter: new Adapter() });

describe('<LocationBox />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<LocationBox />);
    });

    

});

*/

/**
 * co NIE testujemy:
 * bibliotek
 * axiosa i połączeń
 * kompleksowych powiązań w naszym programie np jeden btn powoduje reakcje gdzieś dużo dalej (spr czy odpowiedni prop wteyd daje)
 * 
 * co testujemy:
 * po otrzymaniu fake data co zwraca nasz komponent
 * po kliknięciu np buttona czy odpowiednie propsy są powoływane
 * czy podmienienie propsów zmienia to co jest wyrenderowane w innym komponencie
 * czasami warto testować tylko, czy komponent się poprawnie renderuje, czy wszystko ma na miejscu
 * 
 * source: https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8268542?start=0 
 */