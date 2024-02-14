import React from 'react';
import "../css/Footer.css";
const Footer = () => {
  const companyName = "Lumify"; // Replace with your company name
  const address = "123 Main Street, Anytown, USA"; // Replace with your address
  const email = "info@lumify.com"; // Replace with your email address
  const phone = "(555) 555-5555"; // Replace with your phone number

  // Generate random facts about your LED products
  const facts = [
    "We have saved our customers over 1 million kWh of energy!",
    "Our LEDs last an average of 50,000 hours, reducing waste.",
    "We offer a wide range of LEDs to suit any need and budget.",
    "Our team is passionate about lighting and sustainability.",
  ];
  const randomFact = facts[Math.floor(Math.random() * facts.length)];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h3>Contact Us</h3>
            <p>{companyName}</p>
            <p>{address}</p>
            <p><a href={`mailto:${email}`}>{email}</a></p>
            <p><a href={`tel:${phone}`}>{phone}</a></p>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Did You Know?</h3>
            <p>{randomFact}</p>
          </div>
        </div>
      </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} {companyName}. All Rights Reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
