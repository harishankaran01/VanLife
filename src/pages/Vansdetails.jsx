import React from 'react';
import { useParams } from 'react-router-dom';


import "./Vansdetails.css"


export default function Vansdetails() {
    const param=useParams();
 
     let[data,setData]=React.useState(0);
    React.useEffect(()=>{
        fetch(`/api/vans/${param.id}`)
        .then(res=> res.json())
        .then(data=> setData(data.vans))
        .catch(err=>console.log(err))  
  
     

    },[param.id])
        let back={
    "backgroundColor": data.type=="simple" ?  "#E17654": data.type=="rugged"?" #115E59": " #161616"}
   
     
  return (
    <div className='details'>
      { data ?
      <div key={data.id} className="product_details"> 
        <img src={data.imageUrl}/>
        <button style={back}>{data.type}</button>
       <h1>{data.name}</h1>
      <h3>${data.price}<span>/day</span></h3>
      <p>{data.description}</p>
          <div className='btn'>
          <button>Rent this van</button></div>
    </div> :
      <h2>Loading...</h2>
      }
   
       
    </div>
  )
}
