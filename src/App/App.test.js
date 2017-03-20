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

  it('state should default to an empty object', () => {
    const wrapper = mount(<App/>)
    console.log(wrapper.state().data);
    expect(wrapper.state().data).toBe({});
  });

  

})
