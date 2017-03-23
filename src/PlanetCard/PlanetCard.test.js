import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlanetCard from './PlanetCard';
import { shallow, mount } from 'enzyme';
import CardWrapper from '../CardWrapper/CardWrapper';
import fakePlanetObj from '../stub/stubPlanet.json';

<<<<<<< HEAD
describe('PlanetCard', ()=> {

  it.skip('should return a div with the className card', () => {
    const wrapper = shallow(<PlanetCard />)
    expect(wrapper.find(".card").length).toBe(1);
  });

=======

describe('PlanetCard', ()=> {

    it('should have a function of card generator that instantiates 10 planet cards', () => {
      const wrapper = shallow(<CardWrapper data={fakePlanetObj} category="planets"/>)
      expect(wrapper.find('PlanetCard').length).toEqual(10)
    });
>>>>>>> 1db7adab9231e53ffe85ea3228d0c8d452dc8b80

})
