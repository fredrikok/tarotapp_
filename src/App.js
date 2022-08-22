import './App.scss';
import Tarot from '../src/data/tarot.json'
import React, { useState } from 'react';
import {FaGithub } from 'react-icons/fa';


// Shuffle function
const App = () => {
const [keyword, setKeyword] = useState('');
const [desc, setDesc] = useState('');
const [img, setImg] = useState('');
const [result, setResult] = useState('');
const shuffle = () => {
let randomCard = Tarot.cards[Math.floor(Math.random()*Tarot.cards.length)]

//All values from JSON file in console
console.log(randomCard)

setResult(randomCard.name)
setImg(randomCard.image)
setDesc(randomCard.desc)
setKeyword(randomCard.meaning_up)
}

return(

<body>


  <nav>
    <h1>NAV hamburger meny</h1>
  </nav>



<main> 
    <div className="shufflebtn">
      <button onClick={shuffle}> Shuffle</button>
    </div>


  <div className='cardkeywords'>

  <div className="cardpicked">
      <img className='card' src={img}/>
  </div>

  <div className='aside'>
  <h3> Card Name :  {result} </h3>
    <h3> Keywords : {keyword}</h3>
    <h3>Description : </h3>
      <p>{desc}</p>

  </div>

  </div>

  <div>

  </div>



<div className="cardlist">
    <h2>List Of Tarot Cards</h2>
    {Tarot.cards.map((item, i) => (
      <tr key={i}>
        <td>{item.name}</td>
        <td>{item.value}</td>
        <td>{item.suit}</td>
        <td>{item.type}</td>
        <td>{item.image}</td>
      </tr>
      
    ))}
    </div>    
    <footer>
      <p> Powered by: https://rws-cards-api.herokuapp.com/</p>
      <p>Made by yvon and fref</p>
      
      <a href="https://github.com/fredrikok/tarotapp" target="_blank">
       <FaGithub /> </a>  
    </footer>
    </main>
    </body>
      )}
  
export default App;
