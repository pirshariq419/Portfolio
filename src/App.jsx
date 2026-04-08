import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(()=>{
    Aos.init();
  },[])
  return(
    <>
      <NavBar />
      <div className="container">
      <Home />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      </div>
    </>
  )
}

export default App
