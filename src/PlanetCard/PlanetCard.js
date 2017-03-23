import React from 'react';
import '../Card.css';


const PlanetCard = ( {data} ) => {
  return (
    <div className="card">
      <p className="name">{data.name}</p>
      <p className="planet-terrain">{data.terrain}</p>
      <p className="planet-population">{data.population}</p>
      <p className="planet-climate">{data.climate}</p>
    </div>
  )
}

export default PlanetCard;
