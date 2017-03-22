import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', ()=> {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should have a className of app', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('.App').length).toBe(1)
  });

  it('state of selectedCategory should default to undefined', () => {
    const wrapper = mount(<App/>)
    expect(wrapper.state().data).toBe(undefined);
  });

  it('state of films should default to undefined', () => {
    const wrapper = mount(<App/>)
    expect(wrapper.state().data).toBe(undefined);
  });

  it('should have a default of undefined for films and selectedCategory in state', () => {
    const wrapper = shallow(<App/>)
    let mockState = {
      films: undefined,
      selectedCategory: undefined
    }
    expect(wrapper.state()).toMatchObject(mockState);
  })

  it.skip('should have a function called fetchApi', () => {
    const wrapper = mount(<App/>)
    expect(wrapper.find(fetchApi())).toBe(true);
  });

  it.skip('should have a className of App', () => {
    const wrapper = mount(<App/>)

  });

  it.skip('fetchApi should update state', () => {
    const wrapper = mount(<App/>)

  });



})
