import React from 'react';
import { useParams } from 'react-router-dom';
import Data1 from '../Data1';
import Nav from '../components/Nav';
import "./Vansdetails.css"
import Footer from '../components/Footer';

export default function Vansdetails() {
    const param=useParams();
    console.log(param);
      
    let [data,setData]=React.useState(0)
    React.useEffect(()=>{
      setData(Data1.map(data=>{
        let back={
    "backgroundColor": data.type=="simple" ?  "#E17654": data.type=="rugged"?" #115E59": " #161616"}
       if(data.id==param.id){
       return <div key={data.id} className="product_details"> 
        <img src={data.imageUrl}/>
        <button style={back}>{data.type}</button>
       <h1>{data.name}</h1>
      <h3>${data.price}<span>/day</span></h3>
      <p>{data.description}</p>
      </div>
      }
       } ) )
    if(param.id>6)
       setData("**")
    },[param.id]


    )
    console.log(data);
  return (
    <div className='details'>
      <Nav/>
       {data!="**"? <div>{data}
       <div className='btn'><button>Rent this van </button></div>
       <Footer/></div>:<h1>Data Not Found</h1>}
    </div>
  )
}
