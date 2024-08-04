import React from 'react'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import Aboutme from '../components/content/Aboutme'
import About from '../components/content/About'
import Projects from '../components/content/Projects'
import Contact from '../components/content/Contact'
import Skills from '../components/content/Skills'
import Services from '../components/content/Services'

function Homepage() {
  return (
    <>
     <Navbar/>
     <Aboutme/>
     <About/>
     <Skills/>
     <Services/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default Homepage