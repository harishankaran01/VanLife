import React from 'react'

import { Link,useSearchParams,useLocation } from 'react-router-dom';

import "./Vans.css";



export default function Vans() {
let [searchParams, setSearchParams] = useSearchParams();
  let typefilter=searchParams.get("type");
    let[data2,setData2]=React.useState([]);
    React.useEffect(()=>{
        fetch("/api/vans")
        .then(res=> res.json())
        .then(data=> setData2(data.vans))
        .catch(err=>console.log(err))  
     

    },[])
  
let check=typefilter?data2.filter(prev=> prev.type===typefilter):data2
 

  let data1=check.map(data=>{
      let back={
    "backgroundColor": data.type=="simple" ?  "#E17654": data.type=="rugged"?" #115E59": " #161616"}
     return  <div key={data.id} className='product'>
      <Link to={`/vans/${data.id}`} state={{search:searchParams.toString(),type:typefilter}}>
      <img src={data.imageUrl}/>
      <h1>{data.name}</h1>
      <h3>${data.price}/day</h3>
      <button style={back}>{data.type}</button>
      </Link></div>;
  })
  function handleFilter(key,value){
    setSearchParams(prev=>{
      if(value===null){
        prev.delete(key)
      }
      else{
        prev.set(key,value)
      }
      return prev
    })

  }

  return (
    <div >
<h1 className='vansss'>Explore our van options</h1>
<div className='filter'>
        <button onClick={()=>handleFilter("type","simple")} style={{ backgroundColor:"#E17654"}}>Simple</button>
  
        <button onClick={() => handleFilter( "type", "rugged" )} style={{ backgroundColor: "#115E59" }}>Rugged</button>
        <button onClick={() => handleFilter( "type", "luxury" )} style={{ backgroundColor: "#161616" }}>Luxury</button>
        {typefilter ? <button onClick={() => handleFilter("type", null)} >Clear</button>:null} 
</div>
  <div className='container1'> {data1}</div>
 </div>
  )
}
