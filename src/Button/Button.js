import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const Button = ({ handleClick, name }) => {
  return (
    <Link to={`/${name}`} ><button onClick={ () => handleClick(name) }  className="button">{ name }</button></Link>
  )
}


// Button.propTypes = {
//
// }

export default Button;

// <section className="button-section">
//   <button onClick={ () => handleClick('people') }  className="button" >People</button>
//   <button onClick={ () => handleClick('planets') }  className="button">Planets</button>
//   <button onClick={ () => handleClick('vehicles') }  className="button">Vehicles</button>
// </section>
