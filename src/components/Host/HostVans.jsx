import React from 'react';

import { Link,useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../Api';
export function loader() {
  return getHostVans();

}
export default function HostVans() {
  let data1=useLoaderData();
   
 
    let data=data1.map(data=>{
        let back={
    "backgroundColor": data.type=="simple" ?  "#E17654": data.type=="rugged"?" #115E59": " #161616"}
        return <div key={data.id} className='livan'>
       <Link to={`/Host/vans/${data.id}`}>  
            <img src={data.imageUrl}/>
            <div className='col'>
                <h2>{data.name}</h2>
                <h6>${data.price}<span>/day</span></h6>
                <div className='description'><p>{data.description}</p>
                <button className='libtn' style={back}>{data.type}</button></div>
            </div>
    </Link>
        </div>
    })
  return (
    <div className='Hostvans'>
        <h1>Your listed vans</h1>
        <div className='listedvan'>{data.length > 0 ? data :<h2>Loading....</h2>}</div>
    </div>
  )
}
