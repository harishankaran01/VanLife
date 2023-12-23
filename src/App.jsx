import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Vansdetails from "./pages/Vansdetails";
import {createServer} from "miragejs"
import Nav from "./components/Nav";
import Host from "./pages/Host";
import Dashboard from "./components/Host/Dashboard";
import Income from "./components/Host/Income";
import Review from "./components/Host/Review";
import HostVans from "./components/Host/HostVans";
import Hostvandetails from "./components/Host/Hostvandetails";
createServer(
  {
    Routes(){
      this.get("/api/user",()=>{
        return [];
      })
    }
  }
)


export default function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Nav/>}>
     <Route  index element={<Home/>} />
     <Route path="About" element={<About/>} />
     <Route path="vans" element={<Vans/>} />
     <Route path="vans/:id" element={<Vansdetails/>} />
     <Route path="Host" element={<Host/>}>
      <Route  index  element={<Dashboard/>} />
      <Route path="income" element={<Income/>} />
      <Route path="vans" element={<HostVans/>} />
      <Route path="vans/:id" element={<Hostvandetails/>} />
      <Route path="review" element={<Review/>} />
    </Route>
    </Route>

   </Routes>
   
   </BrowserRouter>
   
   </>
  )
}
