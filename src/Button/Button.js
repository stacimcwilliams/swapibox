import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const Button = ({ handleClick, name }) => {
  return (
    <Link to={`/${name}`} ><button onClick={ () => handleClick(name) }  className="button">{ name }</button></Link>
  )
}

export default Button;
