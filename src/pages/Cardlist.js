import React from 'react'
import Tarot from '../data/tarot.json'
import './Cardlist.scss'


//TODO
//lage et filter som sorterer kort etter TYPE
// EVT Lage en dynamisk slug som viser properties til kortene. 

function Cardlist() {
  return (
    <main>


        WIP Kanskje lage et sånn filter system for hva slags type kort det er? 

        <button> wands</button>
        <button> swords</button>
        <button> pentacles</button>
        <button> cups</button>

        
      <h1>Cardlist</h1>
      <h2>List Of Tarot Cards</h2>
      
    <div className="list">
      {Tarot.cards.map((item, i) => (
        <tr key={i}>        
        <td>{item.value}</td>
        <td>{item.name}</td>
        <img 
        className='listimg' 
        src={`${item.image}`}
        alt={item.name}
         />
        </tr>
      ))}
    </div>

    </main>
  )
}

export default Cardlist