import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VehicleCard from './VehicleCard';
import { shallow, mount } from 'enzyme';

describe.skip('VehicleCard', ()=> {

  it('should have a className of vehicle-card', () => {
    const wrapper = shallow(<VehicleCard/>)
    expect(wrapper.find('.vehicle-card').length).toBe(1)
  });
})
