import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VehicleCard from './VehicleCard';
import { shallow, mount } from 'enzyme';
import CardWrapper from '../CardWrapper/CardWrapper';
import fakeVehicleObj from '../stub/stubVehicle.json';


describe('VehicleCard', ()=> {

    it('should have a function of card generator that instantiates 10 vehicle cards', () => {
      const wrapper = shallow(<CardWrapper data={fakeVehicleObj} category="vehicles"/>)
      expect(wrapper.find('VehicleCard').length).toEqual(10)
    });

})
