import React from 'react';
import './VehicleCard.css';
import '../PlanetCard/Card.css';

const VehicleCard = ( {data} ) => {
  return (


    <div className="card">
      <p className="name">{data.name}</p>
      <p className="vehicle-model">{data.model}</p>
      <p className="vehicle-class">{data.vehicle_class}</p>
      <p className="vehicle-passengers">{data.passengers}</p>

    </div>

  )
}


export default VehicleCard;
