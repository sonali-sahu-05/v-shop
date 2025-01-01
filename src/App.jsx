import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";

import Home from "./Pages/home/Home";
import Shop from "./Pages/shop/Shop";
import Cart from "./Pages/cart/Cart";
import Phonec from "./Pages/Contact/Phonec";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Phonec />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
