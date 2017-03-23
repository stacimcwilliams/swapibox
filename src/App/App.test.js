import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

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

  it('App instaniates three buttons', () => {
    const wrapper = mount(<App/>)
    expect(wrapper.find('button').length).toEqual(3)

  });

  it('button should receive handleClick as a prop', () => {
    const mock = jest.fn()
    const wrapper = mount(<App handleClick={mock}/>)
    expect(wrapper.props().handleClick).toBeDefined
  });

  it('cardWrapper should receive data as a prop', () => {
    const mock = jest.fn()
    const wrapper = mount(<App data={mock}/>)
    expect(wrapper.props().data).toBeDefined
  });

  it('onClick should fire at the last button click', () => {
    const mock = jest.fn()
    const wrapper = mount(<App />)
  })

})
