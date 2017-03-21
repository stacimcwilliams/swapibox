import React, { Component } from 'react';
import './App.css';
import CardWrapper from '../CardWrapper/CardWrapper.js'
import Film from '../Film/film';
// import ObjectCleaner from '../ObjectCleaner/objectCleaner.js'


class App extends Component {
  constructor(){
    super()
    this.state = {
      people: {},
      vehicles: {},
      planets: {},
      films: {},
    }
  }

  componentWillMount(){
    console.log('componentWillMount');
    this.fetchApi();
  }

  fetchApi(){
    Object.keys(this.state).forEach( key => {
      fetch('http://swapi.co/api/'+key)
        .then(data => data.json())
        .then(json => this.setState({[key]: json}))
    })
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <section className="header">
          <h1>SWAPI-Box</h1>
          <p className="favorites">View Favorites</p>
        </section>
        <section className="button-section">
          <button className="button">People</button>
          <button className="button">Planets</button>
          <button className="button">Vehicles</button>
        </section>
        <Film movie={this.state.films}/>
        <CardWrapper films={this.state.data}/>
      </div>
    );
  }
}

export default App;
