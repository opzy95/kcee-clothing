import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>KCEE CLOTHING</h3>
              <p>Where Style Meets Comfort</p>
            </div>
            <p className="footer-description">
              Discover the perfect blend of style, comfort, and quality.
              Elevate your wardrobe with our exclusive collection.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                📘 Facebook
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                📷 Instagram
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                🐦 Twitter
              </a>
              <a href="#" className="social-link" aria-label="WhatsApp">
                📱 WhatsApp
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Categories</h4>
            <ul className="footer-links">
              <li><a href="#shorts">Shorts</a></li>
              <li><a href="#caps">Caps</a></li>
              <li><a href="#hoodies">Hoodies</a></li>
              <li><a href="#others">Others</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📍 123 Fashion Street<br />Style City, SC 12345</p>
              <p>📞 2347039146193</p>
              <p>✉️ kceeclothing@gmail.com</p>
              <p>🕒 Mon - Sat: 9AM - 6PM</p>
            </div>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Subscribe to our newsletter for the latest updates and exclusive offers</p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2026 KCEE Clothing. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#shipping">Shipping Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;