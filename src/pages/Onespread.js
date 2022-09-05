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

  setResult(randomCard.name)
  setDesc(randomCard.desc)
  setMeaning(randomCard.meaning_up)
  setImg(randomCard.image)
  console.log(randomCard)
}


//If Card upside down 😎 50/50 chance of reversed

if (Math.random() >= 0.5) {
  setImg._transform = `rotateX(180deg)`;   
  return (
    <main>
<div className="shufflebtn">
      <button onClick={shuffle}> Shuffle</button>
  </div>
<div className='main-box'>
  <div className="cardpicked">
      <img 
      className='card'
      src={img} 
      alt={result}
      style={{ transform: setImg._transform }}  
      />
  </div>
  <div className='aside'>
    <h3>{result} </h3>
    <h3>{meaning}</h3>
    <p>{desc}</p>
  </div>
</div>
    </main>
  )
  } else {    

    return(
<main>
<div className="shufflebtn">
      <button onClick={shuffle}> Shuffle</button>
  </div>
<div className='main-box'>
  <div className="cardpicked">
      <img 
      className='card'
      src={img} 
      alt={result}
      />
  </div>
  <div className='aside'>
    <h3>{result} </h3>
    <h3>{meaning}</h3>
    <p>{desc}</p>
  </div>
</div>
</main>
)
}


return(

<main>
  <div className="shufflebtn">
      <button onClick={shuffle}> Shuffle</button>
  </div>
</main>

)}
  export default Lol;

