import React from 'react';
import { useParams,NavLink } from 'react-router-dom';


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
      <div>
          <NavLink to=".." relative='path' className='back-button'>&larr; back to the files</NavLink>
      <div key={data.id} className="product_details"> 
        
      <div className='prod_image'>
            
        <img src={data.imageUrl}/></div>
        <div className='prod_cont'>
        <button style={back}>{data.type}</button>
       <h1>{data.name}</h1>
      <h3>${data.price}<span>/day</span></h3>
      <p>{data.description}</p>
          <div className='btn'>
              <button>Rent this van</button></div>
              </div>
    </div> 
        </div>:
      <h2>Loading...</h2>
      
      }
   
       
    </div>
  )
}
