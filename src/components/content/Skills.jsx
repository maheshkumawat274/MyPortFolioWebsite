import React from 'react';
import './skill.css';

const Skills = () => {
  return (
    <>
    <div className='container pt-5'>
      <h1 className='text-light'>Skills</h1>
    </div>
    <div className="container-fluid mt-5 pt-5 p-5">
    <div className="container w-100 w-lg-50">
      <div className="row">
        {[
          { src: "../images/skills/html.png", alt: "HTML", name: "HTML" },
          { src: "../images/skills/css.png", alt: "CSS", name: "CSS" },
          { src: "../images/skills/javascript.png", alt: "JavaScript", name: "JavaScript" },
          { src: "../images/skills/bootstrap.png", alt: "Bootstrap", name: "Bootstrap" },
          { src: "../images/skills/react.png", alt: "React", name: "React" },
          { src: "../images/skills/node.png", alt: "Node JS", name: "Node JS" },
          { src: "../images/skills/express-js.png", alt: "Express JS", name: "Express JS" },
          { src: "../images/skills/php.png", alt: "PHP", name: "PHP" },
          { src: "../images/skills/net.png", alt: ".NET", name: ".NET" },
          { src: "../images/skills/graphql.png", alt: "Graphics Design", name: "Graphics Design" },
        ].map((skill, index) => (
          <div key={index} className="col-lg-6 col-md-6 col-sm-12 mb-4 ">
            <div className="text-center p-3 h-100 d-flex flex-column align-items-center justify-content-center skill-section" data-aos="flip-left" data-aos-duration='1000'>
              <img src={skill.src} alt={skill.alt} className="fixed-size-img mb-2" />
              <h1 className="text-light">{skill.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

    </>
  );
};

export default Skills;
