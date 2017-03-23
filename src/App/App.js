import React, { Component } from 'react';
import './App.css';
import CardWrapper from '../CardWrapper/CardWrapper.js'
import Film from '../Film/Film.js';
import Button from '../Button/Button';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  constructor(){
    super()
    this.state = {
      selectedCategory: {},
      films: undefined,
      category: '',
      favorites: []
    }
  }

  componentDidMount(){
    <Redirect to='/' />
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
      .then(json => this.setState({category: name, selectedCategory: json}))
      .catch((error)=> {console.log(error)
      })
  }

render() {

  return (
    <Router >
    <div className="App">
      <section className="header">
        <h1 className='logo'>SWAPI-BOX</h1>
        <p className="favorites">View Favorites</p>
      </section>

      <Button handleClick={ (name) => this.fetchApi(name) } name='people'/>
      <Button handleClick={ (name) => this.fetchApi(name) } name='planets'/>
      <Button handleClick={ (name) => this.fetchApi(name) } name='vehicles'/>

      <Route path='/' render={() =>
        <div className="select-category">
          Select a Category
        </div>
      }/>


      <Route path='/people' render={() => {
        return(<div>
          <CardWrapper data={this.state.selectedCategory.results} category={this.state.category}/>
        </div> )
      }
      }/>

      <Route path='/planets' render={() => {
        return(<div>
          <CardWrapper data={this.state.selectedCategory.results} category={this.state.category} />
        </div>)
      }}/>

      <Route path='/vehicles' render={() =>
        <div>
          <CardWrapper data={this.state.selectedCategory.results} category={this.state.category}/>
        </div>
      }/>

      <Film movie={this.state.films}/>
    </div>
  </Router>
  );
  }
}

App.propTypes = {
  selectedCategory: React.PropTypes.object,
  film: React.PropTypes.object,
};

export default App;
