import React, { Component } from 'react';
import '../CardWrapper/CardWrapper.css';


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
        <div className="people-card">
          <button> Favorite </button>
          <p>  { planetResult.name }  </p>
          <p>{ planetResult.planetName }</p>
          <p>{ planetResult.population }</p>
          <p>  { speciesResult.species }  </p>
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
