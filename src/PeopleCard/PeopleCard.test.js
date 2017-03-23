import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PeopleCard from './PeopleCard';
import { shallow, mount } from 'enzyme';

describe('PeopleCard', ()=> {

  it('starts with a state of people as an empty array', () => {
    const wrapper = shallow (<PeopleCard />);
    expect(wrapper.state('people')).toBe([]);
  })

})
