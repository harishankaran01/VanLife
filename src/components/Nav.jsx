import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "../App.css";
import { Outlet } from 'react-router-dom';
import Footer from "./Footer"

export default function Nav() {
  return (
    <div className='site'>
   <div className='nav section_padding'>
    <h1><Link to="/" >#VANLIFE</Link></h1>
    <ul>
        <li><NavLink to="/Host" className={({isActive})=> isActive ? "Act":null} >Host</NavLink></li>
        <li><NavLink to="/About"className={({isActive})=>isActive ? "Act":null}>About</NavLink></li>
        <li><NavLink to="/Vans" className={({isActive})=> isActive ? "Act":null} >Vans</NavLink></li>
    </ul>
   </div>
   <Outlet/>
   <Footer/>
   </div>

  )
}
