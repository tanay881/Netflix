import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import card_data from '../../assets/cards/Cards_data'

const TitleCards = ({title, category}) => {

  return (
    <div className='titlecards'>
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="card-list">
        {
          card_data.map((card, index) => {
            return <div className='card' key={index}>
              <img src={card.image} alt=""/>
              <p>{card.name}</p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default TitleCards