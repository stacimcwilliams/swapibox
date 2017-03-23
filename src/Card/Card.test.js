import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow, mount } from 'enzyme';

describe.skip('Card', ()=> {

  it.skip('renders without crashing', () => {
    const wrapper = shallow(<Card />)
  });

  it.skip('should return a div', () => {
    const wrapper = shallow(<Card />)

  });

})
