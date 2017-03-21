import React from 'react';
import './CardWrapper.css';
import Card from '../Card/Card.js'

const categoryCheck = (props) => {
  return props ? <div>Select a Category</div> : <Card />
}

const CardWrapper = (props) => {
  return (
    <div>
      { categoryCheck(props) }
    </div>
  )
}

export default CardWrapper;
