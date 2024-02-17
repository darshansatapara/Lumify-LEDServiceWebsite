import React from "react";
import "../css/ProductCard.css";


const ProductCard = ({ product }) => {
    return (
      <div className="product-card">
        <div className="productimg">
        <img src={product.image} alt={product.name} />
        </div>
        <div className="productdetails">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span>${product.price}</span>
        {/* Add a button or link to product details if needed */}
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  