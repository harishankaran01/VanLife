import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link,NavLink } from 'react-router-dom';

export default function Host() {
  return (
    <>
  
  
  <ul className='Host'>
        <li><NavLink to="/Host" end className={({isActive})=> isActive ? "Act":null} >Dashboard</NavLink></li>
        <li><NavLink to="/Host/income"className={({isActive})=> isActive ? "Act":null} >Income</NavLink></li>
        <li><NavLink to="/Host/Vans" className={({isActive})=> isActive ? "Act":null}>Vans</NavLink></li>
        <li><NavLink to="/Host/review" className={({isActive})=> isActive ? "Act":null}>Reviews</NavLink></li>
    </ul>

   <Outlet/>
     </>
  )
}
