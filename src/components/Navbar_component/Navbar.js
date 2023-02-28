import React from 'react'
import { useState } from 'react'
import './Navbar.scss'


import { Link } from 'react-router-dom'
//icons
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


//data fra Navdata aka alle linkene
import { NavData } from './NavData'



function Navbar() {
  const [navbar, setNavbar ] = useState(false);
  const showNavbar = () => setNavbar(!navbar); 
  return (
  <>

    <div className="navbar">

      <Link to="#" className='menu-bars'>
        <FaIcons.FaBars onClick={showNavbar} />
      </Link>
    </div>

    <nav className={navbar ? "nav-menu active" : "nav-menu"}>
      <ul className="nav-menu-items" onClick={showNavbar}>
      <li className="navbar-toggle">
        <Link to="#" className="menu-bars">
          <AiIcons.AiOutlineClose />
        </Link>
      </li>


{/* Går gjennom array på navdata */}
    {NavData.map((item, index) => {
      return (
        <li key={index} className={item.cName}>
          <Link to={item.path}>
          <span>{item.title}</span>
          {item.icon}
          </Link>
        </li> 
      )
    })}
  </ul>
  </nav>
    </>
  );
}

export default Navbar