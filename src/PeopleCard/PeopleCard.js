import React, { Component } from 'react';
import '../Card.css';



class PeopleCard extends Component {
  constructor(){
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    this.setState({ people: this.props })
    setTimeout(()=> {
      this.setState({ people: this.props })
    }, 3000)
  }

  displayCard() {
    const { planetResult, speciesResult } = this.state.people.data
      return (
        <div className="card">
          <p className="name">  { planetResult.name }  </p>
          <p>{ planetResult.planetName }</p>
          <p>{ planetResult.population }</p>
          <p>  { speciesResult.species }  </p>
          <button className="favorite"> Favorite </button>
        </div>
      )
    }

  render(){

    if (this.state.people.data) {
      return this.displayCard()
    }
    return (
      <p> Loading </p>
    )
  }
}

export default PeopleCard;
