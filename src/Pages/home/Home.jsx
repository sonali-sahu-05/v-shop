import React, { useState, useCallback } from "react";
import bg from "../../assets/bg0.gif";
import "./Home.css";
import { category } from "../../Components/Newcategory"; // Assuming this contains your category data
import Product from "../../Components/products/Product"; // Assuming Product is a reusable component
import { DummyData } from "../../Components/category"; // DummyData assumed to have consistent keys

const Home = () => {
  const [cate, setCate] = useState(DummyData);

  // Filter products by category
  const filterproducts = useCallback(
    (category) => {
      if (category === "All") {
        setCate(DummyData); // Reset to all products
      } else {
        const updatedata = DummyData.filter((item) => item.category === category);
        setCate(updatedata);
      }
    },
    [setCate]
  );

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-bg">
        <img src={bg} alt="Decorative Background" />
      </div>

      {/* Category Section */}
      <h1 className="cate-h1">Category Section</h1>
      <div className="category-section">
      
        {category.map((item) => (
          <div
            key={item.id}
            className="category-card"
            onClick={() => {
              filterproducts(item.name);
            }}
          >
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {/* Product Section */}
      <h1 className="product-h1">Product Section</h1>
      <div className="product-section">
        {cate.slice(0, 7).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
