import React from 'react';

const ProjectCard = ({ title, text, demoLink, codeLink,img }) => {
  return (
    <div className="card mb-4 h-100" data-aos="zoom-in" data-aos-duration='1000'>
      <img src={img} className='img-fluid' alt="Project Thumbnail" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={demoLink} className="btn btn-primary">Demo</a>
        <a href={codeLink} className="btn btn-danger mx-2">Code</a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectData = [
    {
      img: '../images/hero/Portfolio-Desk.jpg',
      title: "Portfolio",
      text: "This is a project made with complete React js.",
      demoLink: "https://myprtfoliowebsite.netlify.app/",
      codeLink: "#"
    },
    {
      img: '../images/hero/ecommerce-websites.jpg',
      title: "E-Commerce Website",
      text: "ReactJS eCommerce site with product listings and seamless checkout",
      demoLink: "https://ecomercewebsiteproject.netlify.app/",
      codeLink: "https://github.com/maheshkumawat274/Ecommerce_Website_Project"
    },
    {
      img: '../images/hero/everyday-gym.jpg',
      title: "GYM Website",
      text: "This is a project made with complete React js.",
      demoLink: "https://gymprojectstar.netlify.app/",
      codeLink: "https://github.com/maheshkumawat274/FitnessGo_ReactJS"
    },
    {
      img: '../images/hero/spa_cin6of.avif',
      title: "Manali Spa",
      text: "Developed a Manali spa website showcasing services, pricing, and booking.",
      demoLink: "https://manalicallgirl.in/",
      codeLink: "https://github.com/maheshkumawat274/ManaliSpaWebsite"
    },
    {
      img: '../images/hero/f8-11102016-my-6042.webp',
      title: "HealthCare",
      text: "This is a project made with complete React js.",
      demoLink: "#",
      codeLink: "#"
    },
    {
      img: '../images/hero/Portfolio-Desk.jpg',
      title: "Project 6",
      text: "This is a project made with complete React js.",
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <div className='container p-5'>
      <h1 className='text-light mb-5'>Projects</h1>
      <div className="row g-4">
        {projectData.map((project, index) => (
          <div key={index} className='col-lg-4 col-md-6 col-sm-12'>
            <ProjectCard
              img = {project.img}
              title={project.title}
              text={project.text}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
