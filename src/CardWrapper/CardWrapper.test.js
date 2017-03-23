import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardWrapper from './CardWrapper';
import { shallow, mount } from 'enzyme';
import fakeVehicleObj from '../stub/stubVehicle.json';
import fakePlanetObj from '../stub/stubPlanet.json';


describe('CardWrapper', ()=> {

  it('renders without crashing', () => {
    const wrapper = shallow(<CardWrapper />)
  });

  it('should have a className of card-wrapper', () => {
    const wrapper = shallow(<CardWrapper />)
    expect(wrapper.find('.card-wrapper')).toHaveLength(1)
  });

  it('should have a function of card generator that instantiates 10 vehicle cards', () => {
    const wrapper = shallow(<CardWrapper data={fakeVehicleObj} category="vehicles"/>)
    expect(wrapper.find('VehicleCard').length).toEqual(10)
  });

  it('should have a function of card generator that instantiates 10 planet cards', () => {
    const wrapper = shallow(<CardWrapper data={fakePlanetObj} category="planets"/>)
    expect(wrapper.find('PlanetCard').length).toEqual(10)
  });

});
