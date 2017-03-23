import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button'
import { shallow, mount } from 'enzyme';

describe('Button', ()=> {
  it('should have a classname of button', () => {
    const wrapper = shallow(<Button/>)
    expect(wrapper.find('.button')).toHaveLength(1)
  });

  it('Button should receive handleClick as a prop', () => {
    const mock = jest.fn()
    const wrapper = shallow(<Button handleClick={mock}/>)
    expect(wrapper.props().handleClick).toBeDefined
  });

  it('Button should receive name as a prop', () => {
    const mock = jest.fn()
    const wrapper = shallow(<Button name={mock}/>)
    expect(wrapper.props().name).toBeDefined
  });

});
