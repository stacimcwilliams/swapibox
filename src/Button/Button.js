import React from 'react';

const Button = ({ handleClick, name }) => {
  return (
    <button onClick={ () => handleClick(name) }  className="button">{ name }</button>
  )
}

export default Button;







// <section className="button-section">
//   <button onClick={ () => handleClick('people') }  className="button" >People</button>
//   <button onClick={ () => handleClick('planets') }  className="button">Planets</button>
//   <button onClick={ () => handleClick('vehicles') }  className="button">Vehicles</button>
// </section>
