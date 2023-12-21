import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "../App.css";

export default function Nav() {
  return (
   <div className='nav section_padding'>
    <h1><Link to="/" >#VANLIFE</Link></h1>
    <ul>
        <li><NavLink to="/About" >About</NavLink></li>
        <li><NavLink to="/Vans" >Vans</NavLink></li>
    </ul>
   </div>
  )
}
