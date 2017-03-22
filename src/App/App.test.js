import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', ()=> {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

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

  it.skip('should have a function called fetchApi', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(fetchApi())).toBe(true);
  });

  it('should have a className of App', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('.App').length).toBe(1);

  });

});
