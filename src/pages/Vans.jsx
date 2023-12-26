import React from 'react'

import { Link } from 'react-router-dom';

import "./Vans.css";



export default function Vans() {
    let[data2,setData2]=React.useState([]);
    React.useEffect(()=>{
        fetch("/api/vans")
        .then(res=> res.json())
        .then(data=> setData2(data.vans))
        .catch(err=>console.log(err))  
     

    },[])
    console.log(data2);

  let data1=data2.map(data=>{
      let back={
    "backgroundColor": data.type=="simple" ?  "#E17654": data.type=="rugged"?" #115E59": " #161616"}
     return  <div key={data.id} className='product'>
      <Link to={`/vans/${data.id}`}>
      <img src={data.imageUrl}/>
      <h1>{data.name}</h1>
      <h3>${data.price}/day</h3>
      <button style={back}>{data.type}</button>
      </Link></div>;
  })

  return (
    <div >
<h1 className='vansss'>Explore our van options</h1>
  <div className='container1'> {data1}</div>
 </div>
  )
}
