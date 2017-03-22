import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Film from './Film';
import { shallow, mount } from 'enzyme';

describe('Film', ()=> {

  it('should return a div', () => {
    const wrapper = shallow(<Film />)

  });

  it('should have a function called randomQuote', () => {
    const wrapper = shallow(<Film />)

  });

})
