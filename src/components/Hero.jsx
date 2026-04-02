import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      {/* Overlay for better text readability */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          KCEE CLOTHING
        </h1>

        <p className="hero-subtitle">
          Discover the perfect blend of style, comfort, and quality.
          Elevate your wardrobe with our exclusive collection.
        </p>

        <div className="hero-buttons">
          <button className="hero-btn-primary">
            Shop Now
          </button>

          <button className="hero-btn-secondary">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
