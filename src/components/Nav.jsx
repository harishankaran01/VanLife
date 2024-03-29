import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "../App.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import { Outlet } from 'react-router-dom';
import Footer from "./Footer"

export default function Nav() {
  let [nav1,setNav1]=React.useState(false);
  return (
    <div className='site'>
   <div className='nav section_padding'>
    <div className='nav1'>

    <h1><Link to="/" >#VANLIFE</Link></h1>
    <ul className='xxl'>
        <li><NavLink to="/Host" className={({isActive})=> isActive ? "Act":null} >Host</NavLink></li>
        <li><NavLink to="/About"className={({isActive})=>isActive ? "Act":null}>About</NavLink></li>
        <li><NavLink to="/Vans" className={({isActive})=> isActive ? "Act":null} >Vans</NavLink></li>
        { JSON.parse(localStorage.getItem("loggin")) ?<li><NavLink to="/" onClick={() => {
                localStorage.setItem("loggin",false)
                setNav1(prev => !prev)}}  className={({ isActive }) => isActive ? "Act" : null} >Log out</NavLink></li>:"" }
    </ul>
          
    </div>
        {nav1 ? <ul className='xl fade-in-left'>
          <li><NavLink to="/Host" onClick={() => setNav1(prev => !prev)} className={({ isActive }) => isActive ? "Act" : null} >Host</NavLink></li>
          <li><NavLink to="/About" onClick={() => setNav1(prev => !prev)} className={({ isActive }) => isActive ? "Act" : null}>About</NavLink></li>
          <li><NavLink to="/Vans" onClick={() => setNav1(prev => !prev)} className={({ isActive }) => isActive ? "Act" : null} >Vans</NavLink></li>
          { JSON.parse(localStorage.getItem("loggin")) ?<li><NavLink to="/" onClick={() => {
                localStorage.setItem("loggin",false)
                setNav1(prev => !prev)}}  className={({ isActive }) => isActive ? "Act" : null} >Log out</NavLink></li>:"" }
          </ul> : null}
    <div className='navbtn'>
          <div onClick={() => setNav1(prev => !prev)}> {nav1 ? <RiCloseLine size={30} /> : <RiMenu3Line size={30} />}</div>
          
          
    </div>
   </div>
      <main><Outlet /></main>
   
   <Footer/>
   </div>

  )
}
