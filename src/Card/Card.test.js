import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow, mount } from 'enzyme';

describe('Card', ()=> {

  it('renders without crashing', () => {
    const wrapper = shallow(<Card />)
  });

  it('should return a div', () => {
    const wrapper = shallow(<Card />)
    expect(wrapper.find('.individual-card').length).toBe(1)
  });

})
