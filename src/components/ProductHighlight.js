import React from "react";
import "../css/ProductHighlight.css";
import { useNavigate } from "react-router-dom";



const ProductHighlights = () => {
const navigate=useNavigate();

  const navigateToProduct=()=>{
    navigate("/products")
  
  }
  return (
    <section className="product-highlights">
      <div className="heading">
        <h1>Experience the Brilliance of Our LED Products</h1>
        <p>
          Discover a new level of illumination with our innovative LED lighting
          solutions.
        </p>
      </div>
      <div className="product-container">
        <div className="highlight-cards">
          <div className="card">
            <img src="logoes/productHighlight4.avif" alt="Product 1" />
            <h3>Energy Efficiency</h3>
            <p>
              Reduce your energy bills and your environmental impact with our
              energy-saving LEDs.
            </p>
          </div>
          <div className="card">
            <img src="logoes/productHighlight1.avif" alt="Product 2" />
            <h3>Long Lifespan</h3>
            <p>
              Enjoy lasting performance with our durable LEDs that outlast
              traditional bulbs.
            </p>
          </div>
          <div className="card">
            <img src="logoes/productHighlight3.avif" alt="Product 3" />
            <h3>Dimmable & Smart Control</h3>
            <p>
              Create the perfect ambiance and optimize your lighting with our
              smart control options.
            </p>
          </div>
        </div>
        <button className="explore-products-btn" onClick={navigateToProduct}>Explore All Products</button>
      </div>
    </section>
  );
};

export default ProductHighlights;
