
import React from 'react';
import './PlanetCard.css';


const PlanetCard = ( {data} ) => {
  console.log(data);
  return (
    <div className="planet-card">
      <p className="planet-name">{data.name}</p>
      <p className="planet-terrain">{data.terrain}</p>
      <p className="planet-population">{data.population}</p>
      <p className="planet-climate">{data.climate}</p>
    </div>
  )
}

export default PlanetCard;


// import React, { Component } from 'react';
// import './PlanetCard.css'
//
//
// class PlanetCard extends Component {
//   constructor() {
//     super()
//     this.state = {
//       residents : [],
//     }
//   }
// }
//
// componentWillMount() {
//   if(!residents) {
//
//   }
//   return this.props.residents.map(resident => {
//     this.fetchApi(resident)
//   })
// }
//
// setStateResident(json) {
//   this.setState({
//     residents: this.state.residents.concat(json.name)
//   })
// }
//
// fetchApi({ data }) {
//   fetch(data)
//   .then((responce) => {
//     return responce.json()
//   })
//   .then((json) => {
//     this.setStateResident(json)
//   })
// }
//
//   return (
//
//     <div className="planet-card">
//       <p className="planet-name">{data.name}</p>
//       <p className="planet-terrain">{data.terrain}</p>
//       <p className="planet-population">{data.population}</p>
//       <p className="planet-climate">{data.climate}</p>
//     </div>
//
//   )
// }
//
// export default PlanetCard;
