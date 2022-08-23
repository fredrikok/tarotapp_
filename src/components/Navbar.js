import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  return (

    <nav>
    <div className='nav-bar'>
    <p>Navbar</p>
    <p>(Sidemeny)</p>


    <Link to="cardlist">Card List</Link>
    <br></br>
    <br></br>
    <Link to="Onespread">One Spread Reading</Link>
    <br></br>
    <br></br>
    <Link to="Threespread">Three Spread Reading</Link>
    <br></br>
    <br></br>
    </div>
    </nav>
  )
}

export default Navbar