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
        }).catch((error) => console.log(error))
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
      }).catch((error) => console.log(error))
  return speciesObj;
}

const getStateObject = (data) => {
  let temp = []
  let planetResult = {}
  let speciesResult = {}
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
     console.log('ya', data)
      const stateObject = getStateObject(data)
      console.log(stateObject)
      return stateObject.map((person, index) => <PeopleCard key={index} data={ person }/>)
  }
}


const CardWrapper = ( { data, category } ) => {
  console.log('woot')
  let tim = cardGenerator(data, category)
  console.log(tim, 'tim')
  return (
    <div className="card-wrapper">
      {tim}
    </div>
  )
}



export default CardWrapper;
