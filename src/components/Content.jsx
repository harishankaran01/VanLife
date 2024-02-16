import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';


export default function Content() {
  return (
    <div className='content section_padding'>
      {/* <img src={ima} /> */}
   <h1>You got the travel plans, we got the travel vans</h1>
<p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
<button><Link to="/Vans">Find Your Van</Link></button>
    </div>
  )
}
