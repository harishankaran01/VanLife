import React from "react";
import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, 
 Route } from "react-router-dom";
import RouteError1 from "./components/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans,{loader as Vanloader} from "./pages/Vans";
import Vansdetails, { loader as Vansdetailsloader } from "./pages/Vansdetails";
import "../server"
import Nav from "./components/Nav";
import Host from "./pages/Host";
import Dashboard from "./components/Host/Dashboard";
import Income from "./components/Host/Income";
import Review from "./components/Host/Review";
import HostVans, { loader as HostVansloader } from "./components/Host/HostVans";
import Hostvandetails, { loader as HostVansdetailsloader } from "./components/Host/Hostvandetails";
import Detail from "./components/Host/Detail";
import Pricing from "./components/Host/Pricing";
import Photos from "./components/Host/Photos";
import Notfound from "./components/Notfound";

let routees=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Nav />}>
    <Route index element={<Home />} />
    <Route path="About" element={<About />} />
    <Route path="vans" element={<Vans />} loader={Vanloader} errorElement={<RouteError1 />}/>
    <Route path="vans/:id" element={<Vansdetails />} loader={Vansdetailsloader} errorElement={<RouteError1 />} />
    <Route path="Host" element={<Host />}>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="vans" element={<HostVans />} loader={HostVansloader} errorElement={<RouteError1 />} />
      <Route path="vans/:id" element={<Hostvandetails />} loader={HostVansdetailsloader} errorElement={<RouteError1 />} >
        <Route index element={<Detail />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="photos" element={<Photos />} />
      </Route>
      <Route path="review" element={<Review />} />
    </Route>
    <Route path="*" element={<Notfound />} />
  </Route>

))

export default function App() {
  return (
   <>
   <RouterProvider router={routees}/>
   
   </>
  )
}
