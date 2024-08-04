// src/Services.js
import React from 'react';

const services = [
  {
    title: 'Website Development',
    description: 'Creating responsive and high-performance websites using the latest technologies.',
    image: '../images/hero/web.jpeg',
  },
  {
    title: 'App Development',
    description: 'Developing user-friendly mobile applications for iOS and Android platforms.',
    image: '../images/hero/app.webp',
  },
  {
    title: 'Graphic Design',
    description: 'Designing engaging graphics, logos, and marketing materials to enhance brand identity.',
    image: '../images/hero/graphic.jpg',
  },
  {
    title: 'Content Writing',
    description: 'Crafting high-quality and SEO-optimized content for blogs, websites, and social media.',
    image: '../images/hero/content.webp',
  },
  {
    title: 'Lead Generation',
    description: 'Generating quality leads through targeted strategies and marketing efforts.',
    image: '../images/hero/lead.png',
  },
  {
    title: 'Video Editing',
    description: 'Editing and producing professional videos for various purposes, including promotions and tutorials.',
    image: '../images/hero/video.webp',
  },
];

const Services = () => {
  return (
    <div className="container py-5 pt-5 mt-2">
      <h2 className="text-light mb-5 mt-5">Our Services</h2>
      <div className='row'>
        {services.map((service, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
            <div className='card h-100' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
              <img variant="top" src={`/images/${service.image}`} alt={service.title} />
              <div className='card-body'>
                <div className='card-title fw-bold fs-2'>{service.title}</div>
                <div className='card-text'>{service.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
