import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About KCEE Clothing</h2>
          <p className="about-subtitle">Where Style Meets Comfort</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img
              src="/kcee-img/kcee.png"
              alt="KCEE Clothing Brand"
              className="brand-image"
            />
          </div>

          <div className="about-text">
            <div className="story-section">
              <h3>Our Story</h3>
              <p>
                Founded with a passion for fashion and a commitment to quality, KCEE Clothing
                has been at the forefront of urban streetwear since our inception. We believe
                that clothing should not only look good but feel great and stand the test of time.
              </p>
              <p>
                Our journey began with a simple idea: to create clothing that reflects the
                vibrant energy of modern life while maintaining the highest standards of
                comfort and durability. Every piece in our collection is carefully crafted
                with attention to detail and a focus on sustainable practices.
              </p>
            </div>

            <div className="values-section">
              <h3>Our Values</h3>
              <div className="values-grid">
                <div className="value-item">
                  <div className="value-icon">🎨</div>
                  <h4>Quality Design</h4>
                  <p>Every piece is designed with creativity and attention to detail</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">🌱</div>
                  <h4>Sustainability</h4>
                  <p>Committed to eco-friendly materials and ethical production</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">👥</div>
                  <h4>Community</h4>
                  <p>Building a community of style-conscious individuals</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">💪</div>
                  <h4>Durability</h4>
                  <p>Clothing that lasts through trends and seasons</p>
                </div>
              </div>
            </div>

            <div className="mission-section">
              <h3>Our Mission</h3>
              <p>
                To empower individuals to express their unique style through high-quality,
                affordable clothing that combines comfort, durability, and contemporary design.
                We strive to make fashion accessible to everyone while maintaining our
                commitment to ethical practices and sustainability.
              </p>
            </div>

            <div className="stats-section">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">5000+</div>
                  <div className="stat-label">Happy Customers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Products</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">4.8</div>
                  <div className="stat-label">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;