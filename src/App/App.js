import React, { Component } from 'react';
import './App.css';
import CardWrapper from '../CardWrapper/CardWrapper.js'

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
          <p>View Favorites</p>
        </section>
        <section>
          <button>People</button>
          <button>Planets</button>
          <button>Vehicles</button>
        </section>
        <section className="card-section">
          <CardWrapper data={this.state.data}/>
        </section>

      </div>
    );
  }
}

export default App;
