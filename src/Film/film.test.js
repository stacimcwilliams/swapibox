import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Film from './Film';
import { shallow, mount } from 'enzyme';

describe('Film', ()=> {

  it('should return a div with a className random-film', () => {
    const wrapper = shallow(<Film/>)
    expect(wrapper.find('.random-film').length).toBe(1);
  });

  it('should have three paragraph tags', () => {
    const wrapper = shallow(<Film/>)
    expect(wrapper.find('p').length).toBe(3)
  })
});
