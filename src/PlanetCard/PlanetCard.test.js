import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlanetCard from './PlanetCard';
import { shallow, mount } from 'enzyme';

describe('PlanetCard', ()=> {

  it.skip('should return a div with the className card', () => {
    const wrapper = shallow(<PlanetCard />)
    expect(wrapper.find(".card").length).toBe(1);
  });


})
