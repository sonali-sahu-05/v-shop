import React from "react";
import { category } from "../../Components/Newcategory";
import { useState } from "react";
import Product from "../../Components/products/Product";
import './Shop.css'
import { DummyData } from "../../Components/category";

const Shop = () => {
  //  for filtering the category using the dummy data

  let [cate, setCate] = useState(DummyData);
  // filter product by categoey

  function filterproducts(category) {
    if (category === "all") {
      setCate(DummyData);
    } else {
      const updatedata = DummyData.filter((item) => item.category === category);
      setCate(updatedata);
    }
  }

  return (
    <>
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

      <h1 className="all-p"> Products</h1>
      <div className="product-section">
      
        {cate.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Shop;
