// Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './footer.css'; // Import your CSS file for styling

function Footer() {
  return (
    <footer className="footer text-light py-4"data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom">
      <div className="container">
        <div className="row">
          {/* About Me Section */}
          <div className="col-md-4">
            <h4>About Me</h4>
            <p>
              Hi, I'm Mahesh Kumawat. I'm a web developer specializing in building
              responsive and interactive websites.
            </p>
          </div>

          {/* Contact Section */}
          <div className="col-md-4">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>Email: maheshkumar006376@gmail.com</li>
              <li>Phone: +916376228917</li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="col-md-4">
            <h4>Follow Me</h4>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a
                  href="https://www.facebook.com/maheshkumawat274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaFacebook size={24} />
                </a>
              </li>
              <li className="me-3">
                <a
                  href="https://www.instagram.com/maheshkumawat274/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
              <li className="me-3">
                <a
                  href="https://www.linkedin.com/in/mahesh-kumawat-49a3b3265/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li className="me-3">
                <a
                  href="https://www.linkedin.com/in/mahesh-kumawat-49a3b3265/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaGithub size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-4">
          <p>&copy; 2024 Mahesh Kumawat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
