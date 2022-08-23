import React from 'react'
import Tarot from '../data/tarot.json'





function Cardlist() {
  return (
    <main>
      <h1>Cardlist</h1>
        <h2>List Of Tarot Cards</h2>
    <div className="list">
      {Tarot.cards.map((item, i) => (
        <tr key={i}>        
        <td>{item.value}</td>
        <td>{item.name}</td>
        <td>{item.image}</td>
        </tr>
      ))}
    </div>

    </main>
  )
}

export default Cardlist