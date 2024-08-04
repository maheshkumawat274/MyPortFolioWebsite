import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import './contact.css'
const Contact = () => {
  const handleMailClick = () => {
    const email = 'maheshkumar006376@gmail.com'; 
    const subject = 'Inquiry'; 
    const body = 'Hi, I would like to know more about your services.'; 
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+916376228917'; 
    const message = 'Hello, I would like to inquire about your web development services. Could you please provide me with more information about creating a website?'; 
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); 
  };

  const handleCallClick = () => {
    const phoneNumber = '+916376228917';
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <>
     <div className='container p-5 mb-5 mt-5'>
      <h1 className='text-light pb-5'>Contacts</h1>
      <div className='contact-icon' data-aos="zoom-out" data-aos-duration='1000'>
        <a href='https://www.linkedin.com/in/mahesh-kumawat-49a3b3265/' target='_blank' className='items'>
          <CiLinkedin/>
        </a>
        <a href='https://github.com/maheshkumawat274?tab=repositories' target='_blank' className='items'>
          <FaGithub/>
        </a>
        <a href='#' variant="primary" onClick={handleMailClick} target='_blank' className='items'>
          <MdOutlineMailOutline/>
        </a>
        <a href='#' variant="primary" onClick={handleCallClick} className='items'>
          <LuContact/>
        </a>
        <a href='#' onClick={handleWhatsAppClick} className='items'>
          <FaWhatsapp/>
        </a>

      </div>
     </div>
    </>
  )
}

export default Contact