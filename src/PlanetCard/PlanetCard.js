import React from 'react';
import '../CardWrapper/CardWrapper.css';


const PlanetCard = ( {data} ) => {
console.log(data);
  return (
    <div className="planet-card">
      <p>{data.name}</p>
      <p>{data.terrain}</p>
      <p>{data.population}</p>
      <p>{data.climate}</p>
      <p>{data.residents}</p>
    </div>
  )
}

export default PlanetCard;


// const VehicleCard = ( {data} ) => {
//   return (
//     <div className="vehicle-card">
//       <p className="vehicle-name">{data.name}</p>
//       <p className="vehicle-model">{data.model}</p>
//       <p className="vehicle-class">{data.vehicle_class}</p>
//       <p className="vehicle-passengers">{data.passengers}</p>
//     </div>
//
//   )
// }
