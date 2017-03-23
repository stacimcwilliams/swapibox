import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PeopleCard from './PeopleCard';
import { shallow, mount } from 'enzyme';

describe('PeopleCard', ()=> {

  it('starts with a state of people as an empty array', () => {
<<<<<<< HEAD
    const wrapper = shallow (<PeopleCard/>);
    expect(wrapper.state('people')).toEqual([]);
  });
=======
    const wrapper = shallow (<PeopleCard />);
    expect(wrapper.state('people')).toDeepEqual([]);
  })
>>>>>>> 1db7adab9231e53ffe85ea3228d0c8d452dc8b80

})
