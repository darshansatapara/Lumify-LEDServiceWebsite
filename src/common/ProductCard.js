import React from "react";
import "../css/ProductCard.css";


const ProductCard = ({ product }) => {
    return (
      <div className="product-card">
        <div className="productimg">
        <img src={product.productImage} alt={product.productName} />
        </div>
        <div className="productdetails">
        <h3>{product.productName}</h3>
        <p>{product.description}</p>
        <span>${product.price}</span>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  