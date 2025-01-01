import React from "react";
import "./CartCard.css";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { RemoveItem } from "../../Redux/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartCard = ({ name, image, id, price }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(RemoveItem(id)); // Dispatch the remove action
    toast.error(`${name} removed from cart`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="cardcart mt-10">
      <div className="left">
        <img src={image} alt={name} />
        <div className="name-price">
          <span>{name}</span>
          <span>₹{price}</span>
        </div>
      </div>
      <div className="right">
        <button onClick={handleRemoveItem}>
          Remove <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
