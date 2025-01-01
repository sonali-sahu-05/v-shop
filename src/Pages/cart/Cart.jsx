import React from "react";
import "./cart.css";
import CartCard from "../../Components/cardcard/CartCard";
import { useSelector } from "react-redux";
import emi from "../../assets/emptycart.png";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items); // Access cart items from Redux state

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart mt-10">
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img src={emi} alt="Empty Cart" />
          <h1>Empty Cart</h1>
        </div>
      ) : (
        <div className="cartcart-section">
          {cartItems.map((item) => (
            <CartCard
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      )}

      {cartItems.length > 0 && ( // Show total price only if the cart has items
        <div className="price-section">
          <span>Total Price: ₹{totalPrice.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
