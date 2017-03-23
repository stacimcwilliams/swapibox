import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VehicleCard from './VehicleCard';
import { shallow, mount } from 'enzyme';

describe('VehicleCard', ()=> {

  it('should have a className of card', () => {
    const wrapper = shallow(<VehicleCard/>)
    expect(wrapper.find('.card').length).toBe(1)
  });
})
