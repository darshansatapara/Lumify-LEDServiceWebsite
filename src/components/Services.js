import React from 'react';
import ServiceCard from '../common/ServiceCard';
import "../css/Services.css"
const services = [
  {
    title: 'Residential LED Installation',
    description: 'Upgrade your home with energy-efficient and beautiful LED lighting. We offer a wide range of services, from recessed lighting to under-cabinet lighting, along with smart lighting integration for automated control.',
    icon: 'logoes/home-installation.jpg',
  },
  {
    title: 'Commercial LED Installation',
    description: 'Reduce your business energy costs and create a vibrant atmosphere with our commercial LED installation services. We handle everything from offices and retail spaces to warehouses and outdoor lighting, including retrofitting existing fixtures.',
    icon: 'logoes/commercial-image.jpg', 
  },
  {
    title: 'LED Repair and Maintenance',
    description: 'Keep your LED lights functioning flawlessly with our expert repair and maintenance services. We diagnose and fix any issue, from flickering bulbs to faulty drivers, extending the lifespan of your LED system.',
    icon: 'logoes/led-repair-image.avif', 
  },
  {
    title: 'Custom LED Design and Fabrication',
    description: 'Bring your unique lighting vision to life with our custom design and fabrication services. We create bespoke LED solutions for any space, from intricate chandeliers to innovative architectural lighting, tailored to your specific needs and aesthetics.',
    icon: 'logoes/custom-led-image.jpg', 
  },
  {
    title: 'Emergency LED Services',
    description: 'We understand the importance of lighting, especially during unexpected outages. Our 24/7 emergency LED services ensure prompt response and repair, minimizing downtime and disruption.',
    icon: 'logoes/emergancy.jpg',
  },
  {
    title: 'LED Education and Consulting',
    description: 'Empower yourself with knowledge! We offer educational workshops and consulting services to help individuals and businesses understand the benefits of LED technology, navigate product choices, and make informed lighting decisions.',
    icon: 'logoes/education.webp', 
  },
 
];

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h1>Our Services</h1>
        <p>We offer a comprehensive range of LED installation, repair, and design services to meet your needs.</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
