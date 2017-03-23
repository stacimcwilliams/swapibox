import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import { shallow, mount } from 'enzyme';

describe.skip('Button', ()=> {

  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it.skip('should have a classname of button', () => {
    const wrapper = shallow(<Button/>)
    expect(wrapper.find('.button')).toHaveLength(1)
  });

})
