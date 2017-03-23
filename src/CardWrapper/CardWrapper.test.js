import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardWrapper from './CardWrapper';
import { shallow, mount } from 'enzyme';

describe.skip('CardWrapper', ()=> {

  it.skip('should have a className of card-wrapper', () => {
    const wrapper = shallow(<CardWrapper />)
    expect(wrapper.find('.card-wrapper')).toHaveLength(1)
  });


})
