import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PeopleCard from './PeopleCard';
import { shallow, mount } from 'enzyme';

describe.skip('PeopleCard', ()=> {

  it.skip('should return a div with the className people-section', () => {
    const wrapper = shallow(<PeopleCard />)
    expect(wrapper.find(".people-section").length).toBe(1);
  });

  it.skip('should have a function called peopleCleaner', () => {
    const wrapper = shallow(<PeopleCard />);
    expect(wrapper.find())
  });

  it.skip('starts with a state of people as an empty array', () => {
    const wrapper = shallow (<PeopleCard/>);
    expect(wrapper.state('people')).toBe([]);
  })


})
