import React, { Component } from 'react';
import '../CardWrapper/CardWrapper.css';


class PeopleCard extends Component {
  constructor(){
    super()
    this.state = {
      people: []
    }
  }

  componentWillMount() {
    const result = this.getStateObject()
    console.log(result);
    this.setState({ people: result })
  }

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
      // return (
      //   <div className="people-card">
      //     <p>  { person.planetResult.name }  </p>
      //     <button> Favorite </button>
      //     <p>{ result.name }</p>
      //   </div>
      // )
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
