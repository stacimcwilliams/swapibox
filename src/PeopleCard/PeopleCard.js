import React, { Component } from 'react';
import '../CardWrapper/CardWrapper.css';


class PeopleCard extends Component {
  constructor(){
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    this.setState({ people: this.props })
  }

//   displayCard() {
//     return this.state.people.map(person => {
//       console.log(person.planetResult);
//       console.log(person.planetResult.name);
//       return (
//         <div className="people-card">
//           <button> Favorite </button>
//           <p>  { this.state.people.data.planetResult.name }  </p>
//           <p>{ person.planetResult.planetName }</p>
//           <p>{ person.planetResult.population }</p>
//           <p>  { person.speciesResult.species }  </p>
//         </div>
//       )
//     }
//   )
// }
  render(){
    console.log(this.state.people.data.planetResult);
    return (
      <p>  hello  </p>
    )
  }
}

export default PeopleCard;
