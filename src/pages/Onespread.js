import React from 'react'
import Tarot from '../data/tarot.json'
import { useState } from 'react';




const Lol = () => {
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState('');
  const [result, setResult] = useState('');
  const [meaning, setMeaning] = useState('');
  const shuffle = () => {
  let randomCard = Tarot.cards[Math.floor(Math.random()*Tarot.cards.length)]
  console.log(randomCard.name)
  setResult(randomCard.name)
  setImg(randomCard.image)
  setDesc(randomCard.desc)
  setMeaning(randomCard.meaning_up)
  console.log(randomCard)
}

return(

<main>

  <div className="shufflebtn">
      <button onClick={shuffle}> Shuffle</button>
  </div>

  <div className="cardpicked">
      <img className='card' src={img} alt='picture of a tarot card'/>
  </div>

  <div className='aside'>
    <h3>{result} </h3>
    <h3>{meaning}</h3>
    <p>{desc}</p>
  </div>

</main>

)}
  export default Lol;