import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <main>
        <h1>Home Page</h1>
        <p>Try the Epic free tarot reading app</p>
        <p>Made with React</p>

        <p>List of Cards</p>
        <Link to="cardlist">Card List</Link>
        <Link to="Onespread">One Spread Reading</Link>

      </main>
    </>
  )
}

export default Home