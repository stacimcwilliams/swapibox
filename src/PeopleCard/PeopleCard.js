import React, { Component } from 'react';
import '../CardWrapper/CardWrapper.css';


class PeopleCard extends Component {
  constructor(){
    super()
    this.state = {
      people: [],
    }
  }

  componentWillMount() {
    console.log('will mount peoplecard');

    let temp = []

    this.props.selectedCategory.results.map(person => {
      const result = this.fetchPlanetApi(person)
      temp.push(result)
    });


    this.setState({ people: temp })
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

  // fetchSpeciesApi(obj) {
  //
  //   // species is an array
  //   let temp = {}
  //   let { name } = obj;
  //   fetch(obj.homeworld)
  //       .then(data => data.json())
  //       .then(json => {
  //         let { population } = json
  //         let planetName = json['name']
  //         const personObj = { name, population, planetName }
  //         Object.assign(temp, personObj)
  //       })
  //   return temp;
  // }

  render(){

    return (
      <div className="people-section" >this is a People card</div>
    )
  }
}

//   return an object with the name,hometown,species and Population
//   need to do another api call
//   need to pass that down to people card


// const peopleCleaner = ( people ) => {
//   return people.results.map(person => {
//     const result = fetchNestedApi(person.homeworld)
//     console.log(result['name']);
//     return (
//         <div className="people-card">
//         <p>  { person.name }  </p>
//         <button> Favorite </button>
//         <p>{ result.name }</p>
//       </div>
//       )
//     }
//   )
// }



export default PeopleCard;
