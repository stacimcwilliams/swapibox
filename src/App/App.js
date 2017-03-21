import React, { Component } from 'react';
import './App.css';
// import CardWrapper from '../CardWrapper/CardWrapper.js'
import Film from '../Film/Film.js';
// import Button from '../Button/Button';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import PeopleCard from '../PeopleCard/PeopleCard.js';
// import ObjectCleaner from '../ObjectCleaner/objectCleaner.js'


class App extends Component {
  constructor(){
    super()
    this.state = {
      selectedCategory: undefined,
      films: undefined
    }
  }

  componentDidMount(){
    console.log('componentWillMount');
    this.fetchApi('films');
  }

  fetchApi(name){
    if (name === 'films') {
      return fetch('http://swapi.co/api/'+name)
        .then(data => data.json())
        .then(json => this.setState({films: json}))
    }
      fetch('http://swapi.co/api/'+name)
        .then(data => data.json())
        .then(json => this.setState({selectedCategory: json}))
  }


  render() {
    console.log('render');
    return (
      <Router >
        <div className="App">
          <section className="header">
            <h1>SWAPI-Box</h1>
            <p className="favorites">View Favorites</p>
          </section>
          <Link to='/people'>people</Link>
          <Route path='/people' render={() =>
            <div className='card-wrapper'>
              <PeopleCard />
            </div>
          }/>

          <Film movie={this.state.films}/>
        </div>
      </Router>
    );
  }
}

/* <Link to='/home'>Home</Link>
<Route path='/home' render={() =>
  <section className="header">
    <h1>SWAPI-Box</h1>
    <p className="favorites">View Favorites</p>
  </section>
} /> */
export default App;

/* <div className="App">
  <section className="header">
    <h1>SWAPI-Box</h1>
    <p className="favorites">View Favorites</p>
  </section>
  <Button handleClick={ (name) => this.fetchApi(name) }/>
  <CardWrapper films={this.state.selectedCategory}/>
</div> */
