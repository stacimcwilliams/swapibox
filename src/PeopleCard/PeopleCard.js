import React from 'react';
import '../CardWrapper/CardWrapper.css';

const fetchNestedApi =(api) => {
  let obj = {}
  // console.log(api);
  fetch(api)
    .then(data => data.json())
    .then(json => Object.assign(obj, json))

    console.log(obj);
  // return Object.assign({}, {'name':obj[name], 'population':obj[population]})
}

const peopleCleaner = ( people ) => {
  // console.log(obj);
  //return an object with the name,hometown,species and Population
  //need to do another api call
  //need to pass that down to people card
  return people.results.map(person => {
    <div className="people-card">
      <p>  {person.name}  </p>
      <button> Favorite </button>
      <p>{ fetchNestedApi(person.homeworld) }</p>
    </div>
  }
  )
}


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

export default PeopleCard;



// people (name= hometown= species= population=) button for favorites
// need to another api call for species , name
//need another api call for hometown which retreives population and hometown(name and population )
