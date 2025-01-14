import React, { useState } from "react";
import "./Products.css";

const Products = () => {
  const allProducts = [
    {
      name: "5 Mukhi Rudraksha",
      description: "Blessed and energized premium quality Rudraksha",
      price: 2100,
      image: "🪷",
    },
    {
      name: "Crystal Mala",
      description: "Pure crystal mala for meditation and healing",
      price: 1500,
      image: "🔮",
    },
    {
      name: "Yellow Sapphire",
      description: "Natural and certified Pukhraj stone",
      price: 5500,
      image: "💎",
    },
    {
      name: "Brass Puja Thali Set",
      description: "Complete pooja thali with all accessories",
      price: 3200,
      image: "🪔",
    },
    {
      name: "Rose Quartz Mala",
      description: "Symbol of love and positivity",
      price: 1800,
      image: "🌸",
    },
    {
      name: "Tiger Eye Bracelet",
      description: "Energized bracelet for confidence and focus",
      price: 1300,
      image: "🐯",
    },
  ];

  const [products, setProducts] = useState(allProducts.slice(0, 4)); // Show only the first 3 products initially
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setProducts(allProducts); // Show all products
    setShowAll(true);
  };

  return (
    <div className="shop-container" id="products">
      <h2 className="shop-title">Sacred Items Shop</h2>
      <p className="shop-subtitle">
        Authentic and blessed items for your spiritual journey
      </p>
      <div className="filter-section">
        <button className="filter-button active">All Items</button>
        <button className="filter-button">Rudraksha</button>
        <button className="filter-button">Malas</button>
        <button className="filter-button">Gemstones</button>
        <button className="filter-button">Pooja Items</button>
      </div>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-icon">{product.image}</div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">₹{product.price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
      {!showAll && (
        <button className="view-all-products" onClick={handleViewAll}>
          View All Products →
        </button>
      )}
    </div>
  );
};

export default Products;
