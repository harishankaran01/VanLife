import React from 'react';
import { useParams,NavLink } from 'react-router-dom';
import "./HostVans.css";
import { Outlet } from 'react-router-dom';
import "./HostVans.css"



export default function Hostvandetails() {
  let [currentVan,setCurrentVan]=React.useState([])
  let parm=useParams()
  React.useState(()=>{
    fetch(`/api/host/vans/${parm.id}`)  
    .then(res=>res.json())
    .then(res=>setCurrentVan(res.vans))

  },[])
   let back={
    "backgroundColor": currentVan.type=="simple" ?  "#E17654": currentVan.type=="rugged"?" #115E59": " #161616"}
  return (
    <div className='Hostvandetails'>
      <NavLink to=".." relative='path' className='back-button'>&larr; back to the files</NavLink>
       <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text" >
                        <i
                            className={`van-type van-type-${currentVan.type}` }
                         style={back}>
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
                <ul className='det'>
          <li> <NavLink to="." end className={({ isActive }) => isActive ? 'Act' : null} >Details</NavLink></li>
          <li><NavLink to="pricing" end className={({ isActive }) => isActive ? 'Act' : null} >pricing</NavLink></li>
          <li><NavLink to="photos" className={({ isActive }) => isActive ? 'Act' : null} >photos</NavLink></li>
          
                </ul>
        <Outlet context={{ currentVan }}/>
            </div>
      
    


    </div>
  )
}
