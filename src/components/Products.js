import React, { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
import "../css/Products.css";
import client from "../axios/axiosFile";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    client
      .get("/api/items/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error))
  }, []);

  return (
    <div className="product-page">
      <h1 className="ProductHeading">Products</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
