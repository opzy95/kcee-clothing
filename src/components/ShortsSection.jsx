import React, { useState } from 'react';
import './Shop.css';

function ShortsSection({ onBack }) {
  const [cart, setCart] = useState([]);

  const shorts = [
    {
      id: 1,
      name: 'Cargo Shorts',
      price: 39.99,
      image: '/kcee-img/shorts.jpeg',
      description: 'Comfortable cargo shorts with multiple pockets'
    },
    {
      id: 2,
      name: 'Denim Shorts',
      price: 34.99,
      image: '/kcee-img/shortss.jpeg',
      description: 'Classic denim shorts for casual wear'
    },
    {
      id: 3,
      name: 'Athletic Shorts',
      price: 29.99,
      image: '/kcee-img/shorts3.jpeg',
      description: 'Breathable athletic shorts for workouts'
    },
    {
      id: 4,
      name: 'Top',
      price: 32.99,
      image: '/kcee-img/Top -short.jpeg',
      description: 'Professional basketball shorts with mesh panels'
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const orderViaWhatsApp = (product) => {
    const message = `Hi! I'd like to order: ${product.name} - $${product.price}`;
    const whatsappUrl = `https://wa.me/7039146198?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
//   function ShortsSection({onBack})

  return (
    <section className="category-section">
      <div className="category-container">
        <div className="category-header">
          <button className="back-btn" onClick={onBack}>
            ← Back to Shop
          </button>
          <h2 className="category-title">Shorts Collection</h2>
          <p className="category-description">
            Discover our premium collection of shorts for every style and occasion
          </p>
        </div>

        <div className="products-grid">
          {shorts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-overlay">
                  <button
                    className="quick-view-btn"
                    onClick={() => alert(`Quick view: ${product.description}`)}
                  >
                    Quick View
                  </button>
                </div>
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>

                <div className="product-actions">
                  <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="whatsapp-order-btn"
                    onClick={() => orderViaWhatsApp(product)}
                  >
                    Order via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="cart-summary">
            <h3>Cart Summary ({cart.length} items)</h3>
            <div className="cart-items">
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <strong>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</strong>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ShortsSection;