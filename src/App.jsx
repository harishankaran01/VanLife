import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Vansdetails from "./pages/Vansdetails";


export default function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/vans" element={<Vans/>} />
    <Route path="/vans/:id" element={<Vansdetails/>} />

   </Routes>
   
   </BrowserRouter>
   
   </>
  )
}
