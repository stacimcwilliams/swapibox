import React, { Component } from 'react';
import './App.css';
// import CardWrapper from '../CardWrapper/CardWrapper.js'
import Film from '../Film/Film.js';
import Button from '../Button/Button';
import { Link, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import PeopleCard from '../PeopleCard/PeopleCard.js';
import PlanetCard from '../PlanetCard/PlanetCard.js';
// import ObjectCleaner from '../ObjectCleaner/objectCleaner.js'


class App extends Component {
  constructor(){
    super()
    this.state = {
      selectedCategory: {},
      films: undefined,
      category: ''
    }
  }

  componentDidMount(){
    console.log('componentDidMount');
    this.fetchApi('films');
  }

  fetchApi(name){
    console.log('fetch api name ', name);
    if (name === 'films') {
      return fetch('http://swapi.co/api/'+name)
        .then(data => data.json())
        .then(json => this.setState({films: json}))
    }
      fetch('http://swapi.co/api/'+name)
        .then(data => data.json())
        .then(json => this.setState({category: name, selectedCategory: json}))
  }

  getActiveComponent() {
    console.log('in get active component');
    if (this.state.category) {
      return ( <Redirect to={{
                  pathname: `/${this.state.category}`
                }}/>
              )
    }
  }

  render() {

    return (
      <Router exact={true} path='/' >
        <div className="App">
          <section className="header">
            <h1 className='logo'>SWAPI-BOX</h1>
            <p className="favorites">View Favorites</p>
          </section>


          {this.getActiveComponent()}

          <Button handleClick={ (name) => this.fetchApi(name) } name='people'/>

          <Button handleClick={ (name) => this.fetchApi(name) } name='planets'/>

          <Button handleClick={ (name) => this.fetchApi(name) } name='vehicles'/>

          <Route path='/' render={() =>
              <div>
                Select a Category
              </div>
            }/>

          <Route path='/people' render={() =>
              <div className='card-wrapper'>
                <PeopleCard selectedCategory={this.state.selectedCategory}/>
              </div>
            }/>

          <Route path='/planet' render={() =>
            <div className='card-wrapper'>
              <PlanetCard />
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
