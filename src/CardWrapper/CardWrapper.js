import React from 'react';
import './CardWrapper.css';
import Card from '../Card/Card.js'
import VehicleCard from '../VehicleCard/VehicleCard.js'
import PlanetCard from '../PlanetCard/PlanetCard.js'




const planetMap = (data) => {
  return data.map((planet, index) => {
    return(<PlanetCard key={index}
                      data={planet} />
          )
  })
}

const vehiclesMap = (data) => {
  return data.map((vehicle, index) => {
   return (<VehicleCard key={index}
                         data={ vehicle }/>
          )
 })
 }

const getCards = (data, category) => {
  console.log(category);
  if(category === "vehicles") {
    return vehiclesMap(data)

  } else if(category === "planets") {
    return planetMap(data)
  }
}

{/* // const categoryCheck = (props) =>
//   console.log(props);
//   // return !props ? <div>Select a Category</div> : <Card />
// } */}

const CardWrapper = ( { data, category } ) => {
  return (
    <div className="card-wrapper">
      {getCards(data, category)}
    </div>
  )
}



export default CardWrapper;
