import React, { useState, useEffect } from "react";
import {allProducts} from "./ProductsList"
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Rudraksha");

  useEffect(() => {
    const updateVisibleProducts = () => {
      const filteredProducts = allProducts[selectedFilter] || [];

      if (!showAll) {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 480) {
          setProducts(filteredProducts.slice(0, 2)); // Show 2 products for mobile screens
        } else if (screenWidth <= 768) {
          setProducts(filteredProducts.slice(0, 3)); // Show 3 products for tablets
        } else {
          setProducts(filteredProducts.slice(0, 4)); // Show 4 products for larger screens
        }
      } else {
        setProducts(filteredProducts); // Show all products if "View All" is clicked
      }
    };

    updateVisibleProducts();
    window.addEventListener("resize", updateVisibleProducts);

    return () => window.removeEventListener("resize", updateVisibleProducts);
  }, [showAll, selectedFilter]);

  const handleViewAll = () => {
    setShowAll(true);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setShowAll(false); // Reset to show limited products when filter changes
  };

  return (
    <div className="shop-container" id="products">
      <h2 className="shop-title">Sacred Items Shop</h2>
      <p className="shop-subtitle">
        Authentic and blessed items for your spiritual journey
      </p>
      <div className="filter-section">
        <button
          className={`filter-button ${
            selectedFilter === "Rudraksha" ? "active" : ""
          }`}
          onClick={() => handleFilterChange("Rudraksha")}
        >
          Rudraksha
        </button>
        <button
          className={`filter-button ${
            selectedFilter === "EvilEyeRemoval" ? "active" : ""
          }`}
          onClick={() => handleFilterChange("EvilEyeRemoval")}
        >
          Evil Eye Removal
        </button>
        <button
          className={`filter-button ${
            selectedFilter === "Gemstones" ? "active" : ""
          }`}
          onClick={() => handleFilterChange("Gemstones")}
        >
          Gemstones
        </button>
        <button
          className={`filter-button ${
            selectedFilter === "Kawach" ? "active" : ""
          }`}
          onClick={() => handleFilterChange("Kawach")}
        >
          Kawach
        </button>
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
          View All  →
        </button>
      )}
    </div>
  );
};

export default Products;
