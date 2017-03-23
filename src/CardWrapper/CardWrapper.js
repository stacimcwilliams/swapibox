import React from 'react';
import './CardWrapper.css';
// import Card from '../Card/Card.js'
import VehicleCard from '../VehicleCard/VehicleCard.js'
import PlanetCard from '../PlanetCard/PlanetCard.js'
import PeopleCard from '../PeopleCard/PeopleCard.js'


const fetchPlanetApi = (obj) => {
  let planetObject = {}
  let { name } = obj;
  fetch(obj.homeworld)
      .then(data => data.json())
      .then(json => {
          let { population } = json
          let planetName = json['name']
          const personObj = { name, population, planetName }
          Object.assign(planetObject, personObj)
        })
  return planetObject;
}

const fetchSpeciesApi = (array) => {
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

const getStateObject = (data) => {
  let temp = []
  data.map(person => {
    const planetResult = fetchPlanetApi(person)
    const speciesResult = fetchSpeciesApi(person.species)
    temp.push({planetResult, speciesResult})
  });
  return temp
}


const cardGenerator = (data, category) => {
  if (category === "planets") {
    return data.map((category, index) => <PlanetCard key={index} data={category} />)
   } else if (category === "vehicles") {
     return data.map((vehicle, index) => <VehicleCard key={index} data={ vehicle }/>)
   } else if (category === "people") {
      const stateObject = getStateObject(data)
      return stateObject.map((person, index) => <PeopleCard key={index} data={ person }/>)
  }
}


const CardWrapper = ( { data, category } ) => {
  // debugger
  return (
    <div className="card-wrapper">
      { cardGenerator(data, category) }
    </div>
  )
}



export default CardWrapper;
