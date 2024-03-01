import React, { useState } from 'react';
import ProductCard from '../common/ProductCard';
import "../css/Products.css"
const products = [
  {
    id: 1,
    name: 'LED Ceiling Light',
    description: 'Energy-efficient and bright ceiling light with adjustable color temperature.',
    price: 49.99,
    image: 'logoes/bestp1.jpg', 
  },
  {
    id: 2,
    name: 'LED Strip Lights',
    description: 'Customize your space with colorful and versatile LED strip lights.',
    price: 24.99,
    image: 'logoes/bestp2.jpg', 
  },
  // Add more products here
];

const BestProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-page">
      <h1>Best Products</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
