import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <main>
        <h1>Home Page</h1>
        <p>Try the Epic free tarot reading app</p>        
        <p>Includes all of the original 78 Rider Waite cards with both upright and reversed meanings</p>
        <p>Quick Links</p>
        <div className='home-links'>
          <Link to="cardlist">Card List</Link>
          <Link to="Onespread">One Spread Reading</Link>
          <Link to="Threespread">Three Spread Reading</Link>
          <Link to="horoscope">Horoscope</Link>
        </div>
      </main>
    </>
  )
}

export default Home