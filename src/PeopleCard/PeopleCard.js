import React, { Component } from 'react';
import '../CardWrapper/CardWrapper.css';

class PeopleCard extends Component {
  constructor(){
    super()
    this.state = {
      people: {},
      // planet: []
    }
  }

  // componentDidMount() {
  //   if (this.state.people) {
  //     this.state.people.results.map(person => {
  //       const result = this.fetchNestedApi(person)
  //       this.setState({people: result})
  //     });
  //   }
  // }



  componentWillMount() {
    console.log('will mount peoplecard');
    this.setState({ people: this.props.selectedCategory.results })
  }

  fetchNestedApi(obj) {
    let temp = [...this.state.people]
    let { name } = obj;
    fetch(obj.homeworld)
        .then(data => data.json())
        .then(json => {
          let { population } = json
          let planetName = json['name']
          const personObj = { name, population, planetName }
          temp.push(personObj)
        })
    return temp;
  }

  render(){
    return (
      <div>this is a People card</div>
    )
  }
}

//   return an object with the name,hometown,species and Population
//   need to do another api call
//   need to pass that down to people card


// const peopleCleaner = ( people ) => {
//   return people.results.map(person => {
//     const result = fetchNestedApi(person.homeworld)
//     console.log(result['name']);
//     return (
//         <div className="people-card">
//         <p>  { person.name }  </p>
//         <button> Favorite </button>
//         <p>{ result.name }</p>
//       </div>
//       )
//     }
//   )
// }



export default PeopleCard;
