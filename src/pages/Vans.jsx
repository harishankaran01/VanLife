import React from 'react'
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import Data1 from "../Data1"
import "./Vans.css"


export default function Vans() {
  // React.useEffect(()=>{
  //   fetch("/api/vans")
  //      .then(get1 => get1.json())
  //         .then(data=> console.log(data));
  // },[])
 
  let data1=Data1.map(data=>{
      let back={
    "backgroundColor": data.type=="simple" ?  "#E17654": data.type=="rugged"?" #115E59": " #161616"}
     return  <div key={data.id} className='product'><Link to={`/vans/${data.id}`}>
      <img src={data.imageUrl}/>
      <h1>{data.name}</h1>
      <h3>${data.price}/day</h3>
      <button style={back}>{data.type}</button>
      </Link></div>;
  })

  return (
    <div>
  <Nav/>
  <div className='container1'> {data1}</div>
 


    </div>
  )
}
