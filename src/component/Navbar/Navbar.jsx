import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   
   
   <nav className="navbar navbar-expand-lg  sticky-top bg-dark py-4 ">
  <div className="container">
    <Link className="navbar-brand text-white fw-bold fs-2" to="home">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-5">
        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bold active " aria-current="page" to="about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bold mx-3" to="portfolio">PORTFOLIO</NavLink>
        </li>
    <li className="nav-item">
          <NavLink className="nav-link text-white fw-bold" to="contact">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
   
   
   </>
  )
}

export default Navbar