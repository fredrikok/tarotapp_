import React, { useState } from 'react';
import Tarot from '../data/tarot.json';

const Card = ({ img, result, meaning, desc, isReversed }) => {
  return (
    <div className='main-box'>
      <div className="cardpicked">
        <img
          className='card'
          src={img}
          alt={result}
          style={isReversed ? { transform: 'rotateX(180deg)' } : {}}
        />
      </div>
      <div className='aside'>
        <h3>{result} : {isReversed ? 'Reversed' : 'Upright'}</h3>
        <p>{isReversed ? meaning.meaning_rev : meaning.meaning_up}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};
const TarotCard = () => {
  const [card, setCard] = useState({});
  const shuffle = () => {
    const randomCard = Tarot.cards[Math.floor(Math.random() * Tarot.cards.length)];
    setCard(randomCard);
  };
  return (
    <main>
      <div className="shufflebtn">
        <button onClick={shuffle}>Shuffle</button>
      </div>
      {card.name &&
        <Card
          img={card.image}
          result={card.name}
          meaning={card}
          desc={card.desc}
          isReversed={Math.random() >= 0.5}
        />
      }
    </main>
  );
};

export default TarotCard;
