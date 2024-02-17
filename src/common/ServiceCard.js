import React from "react";
import "../css/ServiceCard.css";


const ServiceCard = ({ service }) => {
    return (
      <div className="service-card">
        <img src={service.icon} alt={service.title} />
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        {/* Add a button or link for more details if needed */}
      </div>
    );
  };
  
  export default ServiceCard;
  