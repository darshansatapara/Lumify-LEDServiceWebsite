import React from 'react';
import "../css/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-Image">
        <img src="logoes/heroImage.jpeg" alt="Hero" className="hero-image" />
        </div>
        <div className="hero-content">
          <h1>Brighter Homes, Smarter Homes</h1>
          <p>Upgrade your home with our innovative LED lighting solutions. Enjoy greater efficiency, enhanced ambiance, and improved control with our smart and stylish LED options.</p> 
          <button className="hero-button">Explore More</button> 
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// // import { Button } from "../styles/Button";

// const HeroSection = ({ myData }) => {
// //   const { name } = myData;

//   return (
//     <Wrapper>
//       <div className="container">
//         <div className="grid grid-two-column">
//           <div className="hero-section-data">
//             <p className="intro-data">Welcome to </p>
//             <h1>  </h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
//               atque temporibus veniam doloribus libero ad error omnis voluptates
//               animi! Suscipit sapiente.
//             </p>
//             <NavLink>
//               {/* <Button>show now</Button> */}
//             </NavLink>
//           </div>
//           {/* our homepage image  */}
//           <div className="hero-section-image">
//             <figure>
//               <img
//                 src="images/heroImage.jpg"
//                 alt="hero-section-photo"
//                 className="img-style"
//               />
//             </figure>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   padding: 12rem 0;

//   img {
//     min-width: 10rem;
//     height: 10rem;
//   }

//   .hero-section-data {
//     p {
//       margin: 2rem 0;
//     }

//     h1 {
//       text-transform: capitalize;
//       font-weight: bold;
//       color: #4226f7;
//     }

//     .intro-data {
//       margin-bottom: 0;
//     }
//   }

//   .hero-section-image {
//     width: 100%;
//     height: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   figure {
//     position: relative;

//     &::after {
//       content: "";
//       width: 60%;
//       height: 80%;
//       background-color: rgba(81, 56, 238, 0.4);
//       position: absolute;
//       left: 50%;
//       top: -5rem;
//       z-index: -1;
//     }
//   }
//   .img-style {
//     width: 100%;
//     height: auto;
//   }

//   @media (max-width: 768px) {
//     .grid {
//       gap: 10rem;
//     }

//     figure::after {
//       content: "";
//       width: 50%;
//       height: 100%;
//       left: 0;
//       top: 10%;
//       /* bottom: 10%; */
//       background-color: rgba(81, 56, 238, 0.4);
//     }
//   }
// `;

// export default HeroSection;
