import React from 'react';
import logo from '../assets/little-lemon-logo.png';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="Little Lemon Logo" style={{ width: '100px', height: 'auto' }} />
        </div>

        {/* Doormat Navigation */}
        <div className="footer-nav">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order online">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>123 Lemon Lane</p>
          <p>Foodie Town, FL 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@littlelemon.com</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
