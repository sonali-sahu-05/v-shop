import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>About VShop</h3>
          <p>
            VShop is your one-stop destination for quality products at affordable prices. Shop now and enjoy amazing offers!
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div className="footer-section">
          <h3>Stay Connected</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
          <p>123 Market St, Bhopal, India</p>
          <p>+91 9876543210</p>
          <p>support@vshop.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 VShop. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
