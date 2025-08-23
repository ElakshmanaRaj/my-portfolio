import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {ClimbingBoxLoader} from "react-spinners"


const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  },[]);

  if (loading){
    return (
      <div className='flex items-center justify-center bg-gray-950/50 h-screen'>
        <ClimbingBoxLoader color='#4A9782' size={16}/>
      </div>
    )
  }
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;