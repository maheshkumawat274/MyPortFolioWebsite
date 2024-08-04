import React, { useEffect, useRef } from 'react'
import './aboutme.css'
import Typed from 'typed.js';
function Aboutme() {
  const typeRef = useRef(null);

  useEffect(() => {
    // Check if the ref is properly set
    if (!typeRef.current) return;

    // Options for Typed.js
    const options = {
      strings: [
        'Welcome to my profile',
        'My name is Mahesh Kumawat',
        'I am a Frontend Developer',
        'building responsive websites'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000, // Add a delay to prevent quick shifting
      startDelay: 500, // Delay before starting to type
      loop: true,
      loopCount: Infinity, // Ensure continuous looping
      showCursor: true, // Show blinking cursor
      cursorChar: "|",
    };

    // Initialize Typed.js
    const typed = new Typed(typeRef.current, options);

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures this runs once

  return (
    <>
      <div className="container mt-5 pt-5 p-5">
        <div className="row p-3">
          {/* Left Column */}
          <div className="col-lg-6 col-md-12 mb-4 d-flex justify-content-center align-items-center">
            <div className="card text-center text-light w-100 pt-5 pb-5" id="homesection"
            data-aos="fade-up-right"
            data-aos-duration='1000'
            >
              <div className="card-body aboutme-body">
                <h1 className="card-text aboutme-text" ref={typeRef}></h1>
                <a href="./pdf/resume.pdf" download="resume.pdf" className="btn btn-outline-warning">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="col-lg-6 col-md-12 mb-4 d-flex justify-content-center align-items-center">
            <div className="card border-0 bg-transparent w-100 d-flex justify-content-center align-items-center" data-aos="fade-up-left"
              data-aos-duration='1000'>
              <div className="lapimg"
              
              >
                <img src="../images/hero/hero.jpg" alt="Laptop" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Aboutme