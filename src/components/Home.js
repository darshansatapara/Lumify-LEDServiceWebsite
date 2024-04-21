import React from "react";
import "../css/Home.css";
import HeroSection from "../components/HeroSection"
import ProductHighlights from "../components/ProductHighlight";
// import ServiceBlurb from "./components/ServiceBlurb";
import WhyChooseUs from "../components/WhyChooseUs";
// import TestimonialSlider from "./components/TestimonialSlider";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

function HomePage() {
  return (<>
    <Navbar/>
    <div className="App">
      <HeroSection />
      <ProductHighlights />
      {/* <ServiceBlurb /> */}
      <WhyChooseUs />
      {/* <TestimonialSlider /> */}
      <Footer />
    </div>
    </>
  );
}

export default HomePage;
