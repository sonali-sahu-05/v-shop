import React from "react";
import "./product.css";
import { useDispatch } from "react-redux";
import { AddItem } from "../../Redux/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(AddItem(product)); // Dispatch product directly
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <div className="product-details">
        <span className="name">{product.name}</span>
        <span className="price">₹{product.price}</span>
        <button onClick={handleAddToCart}>
          Add +
        </button>
      </div>
    </div>
  );
};

export default Product;
