import React, { Component } from 'react';
import './App.css';
import CardWrapper from '../CardWrapper/CardWrapper.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: {}
    }
  }

  componentWillMount(){
    console.log('componentWillMount');
    this.fetchApi();
  }

  fetchApi(){
    const result = fetch('http://swapi.co/api/planets/1/')
                      .then(data => data.json())
                      .then(json => this.setState({data: json}))
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
