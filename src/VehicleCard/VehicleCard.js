import React from 'react';
import '../Card.css';

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

VehicleCard.propTypes = {
  name: React.PropTypes.string,
  model: React.PropTypes.string,
  vehicle_class: React.PropTypes.string,
  passengers: React.PropTypes.string,
};


export default VehicleCard;
