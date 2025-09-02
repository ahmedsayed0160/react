import { useState } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/Home/Home"
import About  from "./components/About/About"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/contact"
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Layout from "./components/Layout/Layout"
import Notfound from './components/Notfound/Notfound';
import "@fortawesome/fontawesome-free"


 


let x =  createBrowserRouter([

  {path : "" ,
     element :<Layout /> ,
    children : [
       {index :true  , element : <Home/>},
     {path : "ABOUT" , element : <About/>},
     {path : "Portfolio" , element : <Portfolio/>},
     {path : "Contact" , element : <Contact/>},
     {path : "*" , element : <Notfound/>},
    
  ],
 },
])




export default function App() {
  return (
   <>
   <RouterProvider   router={x}   ></RouterProvider>
    
    
   </>
  )
}
