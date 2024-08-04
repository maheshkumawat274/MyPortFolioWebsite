
import React from "react";


const About = () => {
  return (
    <>
    <section className="container py-5">
      <h1 className="text-light pb-5">About</h1>
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12 text-center mb-4 mb-md-0" data-aos="fade-down"
            data-aos-duration='1000'>
          <img
            src="../images/hero/about.jpg"
            alt="Your Name"
            className="img-fluid rounded-circle h-75 w-75"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 text-light">
          <div className="p-3" data-aos="fade-down"
            data-aos-duration='1000'>
            <h2>About Me</h2>
            <p>
              Hello! I'm a passionate web developer specializing in front-end
              development with ReactJS. I have a strong background in HTML, CSS,
              and JavaScript, and I love building responsive and interactive
              websites. I'm constantly learning and exploring new technologies to
              improve my skills and create better user experiences.
            </p>
            <p>
              When I'm not coding, you can find me hiking, reading books, or
              exploring new places. I'm always excited to take on new challenges
              and collaborate with others to build innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
