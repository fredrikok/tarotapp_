import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  return (

    <nav>
    <div className='nav-bar'>
    <p>Navbar</p>
    <p>(Hamburgermenu)</p>

    <Link to="/">Home</Link>
    <br></br>
    <br></br>
    <Link to="cardlist">Card List</Link>
    <br></br>
    <br></br>
    <Link to="Onespread">One Spread Reading</Link>
    <br></br>
    <br></br>
    <Link to="Threespread">Three Spread Reading</Link>
    <br></br>
    <br></br>
    <Link to="Horoscope">Daily Horoscope</Link>

    </div>
    </nav>
  )
}

export default Navbar