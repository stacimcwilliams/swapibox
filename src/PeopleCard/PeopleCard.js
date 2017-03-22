import React from 'react';
import '../CardWrapper/CardWrapper.css';

const PeopleCard = ({ people }) => {
  if(people) {
    // const randomPerson = peopleCleaner(people)
    return (
      <div className="people-section">
        { peopleCleaner(people) }
        This is a People card

      </div>
    )

  } else {
    return <div></div>
  }
}



const fetchNestedApi =(api) => {
  let obj = {}
  fetch(api)
    .then(data => data.json())
    .then(json => {
      let { name, population } = json
      const planetName = { name, population }
      Object.assign(obj, planetName)
    })
  return obj
}
// console.log(obj);
//   return an object with the name,hometown,species and Population
//   need to do another api call
//   need to pass that down to people card

const peopleCleaner = ( people ) => {
  return people.results.map(person => {
    const result = fetchNestedApi(person.homeworld)
    console.log(result['name']);
    return (
        <div className="people-card">
        <p>  { person.name }  </p>
        <button> Favorite </button>
        <p>{ result.name }</p>
      </div>
      )
    }
  )
}



export default PeopleCard;



// people (name= hometown= species= population=) button for favorites
// need to another api call for species , name
//need another api call for hometown which retreives population and hometown(name and population )
