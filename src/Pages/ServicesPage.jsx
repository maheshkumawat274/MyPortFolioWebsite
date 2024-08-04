import React from 'react'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import Skills from '../components/content/Skills'
import Projects from '../components/content/Projects'
import Services from '../components/content/Services'

function ServicesPage() {
  return (
    <>
     <Navbar/>
     <Services/>
     <Skills/>
     <Projects/>
     <Footer/>
    </>
  )
}

export default ServicesPage