import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlanetCard from './PlanetCard';
import { shallow, mount } from 'enzyme';
import CardWrapper from '../CardWrapper/CardWrapper';
import fakePlanetObj from '../stub/stubPlanet.json';


describe('PlanetCard', ()=> {

    it('should have a function of card generator that instantiates 10 planet cards', () => {
      const wrapper = shallow(<CardWrapper data={fakePlanetObj} category="planets"/>)
      expect(wrapper.find('PlanetCard').length).toEqual(10)
    });

})
