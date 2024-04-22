import React, { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
import "../css/Products.css";
import client from "../axios/axiosFile";
import Navbar from "../common/Navbar";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    client
      .get("/api/manageproduct/fatchall/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <Navbar />
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
    </>
  );
};

export default Products;
