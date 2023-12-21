import React from 'react';
import van from "../assets/Images/image54.png";
import "../App.css";


export default function Aboutcontent() {
  return (
    <div className='Aboutcontent'>
      <img src={van}/>
      <div className="acontent section_padding">
        <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
        <h6>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉).<br/> <br/>  <br/>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels</h6>
         <div className="box">
          <h2>Your destination is waiting.<br/>
Your van is ready.</h2>
<button>Explore our vans</button>
         </div>

      </div>
    </div>
  )
}
