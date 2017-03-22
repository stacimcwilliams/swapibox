import React from 'react';
import './CardWrapper.css';
import Card from '../Card/Card.js'


const categoryCheck = (props) => {
  console.log(props);
  // return !props ? <div>Select a Category</div> : <Card />
}

const CardWrapper = (props) => {
  return (
    <div className="card-wrapper">
       <Card {...props}/>
    </div>
  )
}



export default CardWrapper;
