import React, { useState } from 'react';
import './navbar.css';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-1 fixed-top" data-aos="fade-down" data-aos-duration='1000'>
      <div className="container">
        <a className="navbar-brand" href="#home">
          <h1 className='fw-bold'>Portfolio</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isNavbarOpen}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <FaBars></FaBars>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto jusitfy-content-end">
            <li className="nav-item">
               <Link style={{textDecoration:'none'}} to='/'><a className="nav-link fw-bold"  onClick={closeNavbar}>HOME</a></Link>
            </li>
            <li className="nav-item">
               <Link style={{textDecoration:'none'}} to='/about'><a className="nav-link fw-bold" onClick={closeNavbar}>ABOUT</a></Link>
            </li>
            <li className="nav-item">
             <Link style={{textDecoration:'none'}} to='/service'><a className="nav-link fw-bold" onClick={closeNavbar}>SERVICES</a></Link>
            </li>
            <li className="nav-item">
              <Link style={{textDecoration:'none'}} to='/contact'><a className="nav-link fw-bold"  onClick={closeNavbar}>CONTACT</a></Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
