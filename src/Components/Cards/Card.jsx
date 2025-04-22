import React from 'react'
import "./Card.css"
//import "./Card2.css"
const Card = ({img,titl,price}) => {
  return (
    <>
    <div className='card'>
     <img src={img} alt="Plant"/>
     <h2>{titl}</h2>
     <p>${price}</p>
    </div>
    </>
  )
}

export default Card
