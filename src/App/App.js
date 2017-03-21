import React, { Component } from 'react';
import './App.css';
import CardWrapper from '../CardWrapper/CardWrapper.js'
import Film from '../Film/Film';
import Button from '../Button/Button';
// import ObjectCleaner from '../ObjectCleaner/objectCleaner.js'


class App extends Component {
  constructor(){
    super()
    this.state = {
      selectedCategory: {},
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
      <div className="App">
        <section className="header">
          <h1>SWAPI-Box</h1>
          <p className="favorites">View Favorites</p>
        </section>
        <Button handleClick={ (name) => this.fetchApi(name) }/>
        <Film movie={this.state.films}/>
        <CardWrapper films={this.state.selectedCategory}/>
      </div>
    );
  }
}

export default App;
