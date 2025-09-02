import React from 'react'
import style from "./Navbar.module.css"
import {  Link, NavLink   } from  'react-router-dom'


export default function Navbar() {
  return (
    <>
    <nav className={`navbar navbar-expand-lg  p-4    ${style.nav}  fixed-top  text-white`}   >
  <div className="container    ">
    <NavLink className=  { ` navbar-brand starr ${style.demo}  `}  to="/">START FRAMEWORK</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0  gap-3">
        
        <li className="nav-item  ">
          <NavLink className="nav-link text-white " to="About">ABOUT</NavLink>
        </li>
     
        <li className="nav-item ">
          <NavLink className="nav-link text-white" to="portfolio">PORTFOLIO</NavLink>
        </li>
     
        <li className="nav-item ">
          <NavLink className="nav-link text-white " to="contact">CONTACT</NavLink>
        </li>
     
          
       
      </ul>
      
    </div>
  </div>
</nav>

  </>
   )
}
