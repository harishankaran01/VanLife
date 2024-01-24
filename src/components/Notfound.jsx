import React from 'react';
import "../App.css"
import { Link } from 'react-router-dom';

export default function Notfound() {
  return (
    <div className='Notfound'>
          <h1>Sorry, the page you were looking for was not found.</h1>
          <button><Link to=".." relative='path'>Return to Home</Link></button>
          
    </div>
  )
}
