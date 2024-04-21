import React from "react";
import "../css/About.css";
import Navbar from "../common/Navbar";

const About = () => {
  const companyName = "Lumify LED";
  const yearFounded = 2022;
  const teamSize = Math.floor(Math.random() * 10) + 5;
  const awards = [
    "Best Eco-Friendly Company Award (2022)",
    "Top LED Lighting Provider (2023)",
    "Customer Satisfaction Award (2022)",
  ];
  const randomAward = awards[Math.floor(Math.random() * awards.length)];

  const missionStatement =
    "At BrightLights LED, we are passionate about providing innovative and sustainable lighting solutions that illuminate your world and positively impact the environment.";

  const values = [
    "Innovation: We strive to constantly develop and offer the latest LED technologies.",
    "Sustainability: We are committed to providing eco-friendly and energy-efficient lighting.",
    "Quality: We are dedicated to delivering high-quality products and services.",
    "Customer Satisfaction: We prioritize providing exceptional customer service.",
  ];

  const teamMembers = [
    {
      name: "S.Darshan ",
      position: "CEO",
      description: "Experienced leader with a passion for sustainability.",
    },
    {
      name: "S.Krisha",
      position: "Product Manager",
      description: "Expert in LED technology and lighting design.",
    },
    {
      name: "P.Nishtha ",
      position: "Marketing Manager",
      description: "Creative strategist with a focus on digital marketing.",
    },
    // Add more team members...
  ];

  return (
    <>
      <Navbar />
      <section className="about">
        <div className="about-container">
          <h1 className="aboutFirstHeading">About {companyName}</h1>
          <p>{missionStatement}</p>
          <div className="about-info">
            <div className="info-card">
              <h3 className="aboutThirdHeading">Founded</h3>
              <p>{yearFounded}</p>
            </div>
            <div className="info-card">
              <h3 className="aboutThirdHeading">Team Size</h3>
              <p>{teamSize}</p>
            </div>
            <div className="info-card">
              <h3 className="aboutThirdHeading">Award</h3>
              <p>{randomAward}</p>
            </div>
          </div>
          <h2 className="aboutSecHeading">Our Values</h2>
          <ul className="values-list">
            {values.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
          <h2 className="aboutSecHeading">Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <h4>{member.name}</h4>
                <p>{member.position}</p>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
