import React from "react";
import { FaShopify, FaSearch, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.css";

const Navbar = () => {
  // Access the 'cart.items' array from the Redux store
  let cartItems = useSelector((state) => state.cart.items); // Updated selector

  return (
    <>
      <div className="nav">
        <div className="top-nav">
          <div className="logo">
            <span>V-Shop</span>
            <FaShopify />
          </div>
          {/* Search bar */}
          <form action="" className="search-box">
            <input type="text" placeholder="Search here" />
            <button>
              <FaSearch />
            </button>
          </form>
          {/* Cart items */}
          <Link to={"/cart"}>
            <div className="cart-box">
              <FaCartPlus />
              <span>{cartItems.length}</span> {/* Display cart item count */}
            </div>
          </Link>
        </div>

        {/* Navigation links */}
        <div className="bottom-nav">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
