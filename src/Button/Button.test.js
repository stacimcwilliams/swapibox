import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button'
import { shallow, mount } from 'enzyme';

describe('Button', ()=> {

  it.skip('should have a classname of button', () => {
    const wrapper = shallow(<Button/>)
    expect(wrapper.find('.button')).toHaveLength(1)
  });

})
