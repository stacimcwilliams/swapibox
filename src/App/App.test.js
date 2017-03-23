import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import fakeCall from '../stub.json'

describe('App', ()=> {


  it('should have a className of app', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('.App').length).toBe(1);
  });

  it('should have a default of undefined for films and selectedCategory in state', () => {
    const wrapper = shallow(<App/>);
    let mockState = {
      films: undefined,
      selectedCategory: {},
      category: ''
    }
    expect(wrapper.state()).toMatchObject(mockState);
  })

  it('fetchApi should setState on componentDidMount', () => {
    const wrapper = mount(<App />);
    let mockState = {
      films: undefined,
      selectedCategory: {},
      category: ''
    }
    expect(wrapper.state()).toMatchObject(mockState);
  });

  it('should have a className of App', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('.App').length).toBe(1);
  });

  it('should update state onClick for category', () => {
    const wrapper = mount(<App/>);

    console.log(wrapper.debug());

  })

});
