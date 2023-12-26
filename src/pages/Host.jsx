import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link,NavLink } from 'react-router-dom';

export default function Host() {
  return (
    <>
  
  
  <ul className='Host'>
        <li><NavLink to="." end className={({isActive})=> isActive ? "Act":null} >Dashboard</NavLink></li>
        <li><NavLink to="income"className={({isActive})=> isActive ? "Act":null} >Income</NavLink></li>
        <li><NavLink to="Vans" className={({isActive})=> isActive ? "Act":null}>Vans</NavLink></li>
        <li><NavLink to="review" className={({isActive})=> isActive ? "Act":null}>Reviews</NavLink></li>
    </ul>

   <Outlet/>
     </>
  )
}
