import React from 'react';
import tarotData from '../data/tarot.json';
import { useParams } from 'react-router-dom';

function SingleCard() {
  const { slug } = useParams();
  const cards = tarotData.cards;
  const card = cards.find(card => card.slug === slug);

  if (!card) {
    return <div>Card not found</div>
  }

  return (
    <main>     
        <div className="main-box">
      <div className="cardpicked">
      <img 
      className='card'
      src={card.image} 
      alt={card.image}
      />    
      </div>
      <div className='aside'>
      <h2>{card.name}</h2>
      <p>Suit: {card.suit} Type: {card.type}</p>
        <h3>Meaning Up</h3>
          <p>{card.meaning_up}</p>
        <h3>Meaing Reversed</h3>
          <p>{card.meaning_rev}</p>
        <h3>Description</h3>
          <p>{card.desc}</p>


      </div>
    </div>
    </main>
  )
}

export default SingleCard;


