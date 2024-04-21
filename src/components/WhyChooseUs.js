import React from 'react';
import "../css/WhyChooseUs.css";
import Navbar from '../common/Navbar';
const WhyChooseUs = () => {
  return (
    <><Navbar/>
    <div className="why-choose-us">
      <div className="why-container">
        <div>
        <h2 className='whychooseh2'>Why Choose Lumify?</h2>
        <p className='whychooseper'>
          Investing in LED lighting is a smart decision for both your wallet and the
          environment. But with so many options available, why choose
          [Your Company Name]? Here are just a few reasons:
        </p>
        </div>
        <div className="benefits">
          <div className="benefit">
            <i className="fas fa-lightbulb"></i>
            <h3 className='whychooseh3' >Expertise & Experience</h3>
            <p className='whychooseper'>
              We have [number] years of experience in the LED lighting industry,
              and our team is composed of qualified and knowledgeable professionals.
              We can help you choose the right lighting solutions for your needs
              and ensure a smooth installation process.
            </p>
          </div>
          <div className="benefit">
            <i className="fas fa-check-circle"></i>
            <h3 className='whychooseh3' >Quality Products & Services</h3>
            <p className='whychooseper'>
              We partner with trusted manufacturers to offer high-quality,
              energy-efficient LED products. We also prioritize quality service,
              from initial consultation to after-sales support.
            </p>
          </div>
          <div className="benefit">
            <i className="fas fa-shield-alt"></i>
            <h3 className='whychooseh3' >Competitive Prices & Warranties</h3>
            <p className='whychooseper'>
              We offer competitive prices for our products and services, ensuring
              you get the best value for your money. We also back our products with
              comprehensive warranties for peace of mind.
            </p>
          </div>
          <div className="benefit">
            <i className="fas fa-thumbs-up"></i>
            <h3 className='whychooseh3' >Customer Satisfaction Guarantee</h3>
            <p className='whychooseper'>
              We are committed to your satisfaction. If you're not completely
              happy with our products or services, we'll work with you to make it
              right.
            </p>
          </div>
        </div>
     
      </div>
    </div>
    </>
  );
};

export default WhyChooseUs;
