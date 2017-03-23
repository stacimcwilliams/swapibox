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
    const result = this.getStateObject()
    console.log(result);
    this.setState({ people: result })
  }
// call two functions get plantet/homeworld and get speciesResult
//in each function make
// set two states homewrld and species

  getStateObject() {
    let temp = []
    this.props.selectedCategory.results.map(person => {
      const planetResult = this.fetchPlanetApi(person)
      const speciesResult = this.fetchSpeciesApi(person.species)
      temp.push({ planetResult, speciesResult })
    });
    return temp
  }

  fetchPlanetApi(obj) {
    let temp = {}
    let { name } = obj;
    fetch(obj.homeworld)
        .then(data => data.json())
        .then(json => {
          let { population } = json
          let planetName = json['name']
          const personObj = { name, population, planetName }
          Object.assign(temp, personObj)
        })
    return temp;
  }

  fetchSpeciesApi(array) {
    const url = array[0]
    let speciesObj = {}
    fetch(url)
        .then(data => data.json())
        .then(json => {
          let { name } = json
          let nameObj = { 'species': name }
          Object.assign(speciesObj, nameObj)
        })
    return speciesObj;
  }

  displayCard() {
    return this.state.people.map(person => {
      console.log(person.planetResult);
      console.log(person.planetResult.name);
      return (
        <div className="people-card">
          <button> Favorite </button>
          <p>  { person.planetResult.name }  </p>
          <p>{ person.planetResult.planetName }</p>
          <p>{ person.planetResult.population }</p>
          <p>  { person.speciesResult.species }  </p>
        </div>
      )
    }
  )
}
  render(){
    return (
      <div> { this.displayCard() }</div>
    )
  }
}

export default PeopleCard;
