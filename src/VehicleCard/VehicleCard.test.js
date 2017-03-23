import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VehicleCard from './VehicleCard';
import { shallow, mount } from 'enzyme';
import CardWrapper from '../CardWrapper/CardWrapper';
import fakeVehicleObj from '../stub/stubVehicle.json';


<<<<<<< HEAD
  it('should have a className of card', () => {
    const wrapper = shallow(<VehicleCard/>)
    expect(wrapper.find('.card').length).toBe(1)
  });
=======
describe('VehicleCard', ()=> {

    it('should have a function of card generator that instantiates 10 vehicle cards', () => {
      const wrapper = shallow(<CardWrapper data={fakeVehicleObj} category="vehicles"/>)
      expect(wrapper.find('VehicleCard').length).toEqual(10)
    });

>>>>>>> 1db7adab9231e53ffe85ea3228d0c8d452dc8b80
})
