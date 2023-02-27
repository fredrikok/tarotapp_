import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tarot from '../data/tarot.json';
import './Cardlist.scss';

function Cardlist() {
  const [selectedSuit, setSelectedSuit] = useState('all');

  function filterCards(suit) {
    return Tarot.cards.filter(card => {
      if (suit === 'all') {
        return card
      }
      if (suit === 'other') {
        return !card.suit;
      } else {
        return card.suit === suit;
      }
    });
  }

  const filteredCards = filterCards(selectedSuit);

  return (
    <main>
      <div className="filters">
        <button onClick={() => setSelectedSuit('all')}>All</button>
        <button onClick={() => setSelectedSuit('wands')}>Wands</button>
        <button onClick={() => setSelectedSuit('swords')}>Swords</button>
        <button onClick={() => setSelectedSuit('pentacles')}>Pentacles</button>
        <button onClick={() => setSelectedSuit('cups')}>Cups</button>
        <button onClick={() => setSelectedSuit('other')}>Other</button>
      </div>
      <h1>Cardlist</h1>
      <h2>List Of Tarot Cards</h2>
      <div className="list">
        {filteredCards.map((card) => (
          <Link to={`/cardlist/${card.slug}`} key={card.name} className='single-card-list'>
            <div>{card.name}</div>
            <div>{card.suit}</div>
            <img className="listimg" src={card.image} alt={card.name} />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Cardlist;
