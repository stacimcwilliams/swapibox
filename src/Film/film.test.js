import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Film from './Film';
import { shallow, mount } from 'enzyme';

describe('Film', ()=> {

  it.skip('should return a div with a className random-film', () => {
    const wrapper = shallow(<Film />)
    expect(wrapper.find('.random-film').length).toBe(1);
  });
});
