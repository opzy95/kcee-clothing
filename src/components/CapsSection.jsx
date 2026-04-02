import React, { useState } from 'react';
import './Shop.css';

function CapsSection({ onBack }) {
  const [cart, setCart] = useState([]);

  const caps = [
    {
      id: 1,
      name: 'Baseball Cap',
      price: 24.99,
      image: '/kcee-img/cap.jpeg',
      description: 'Classic baseball cap with adjustable strap'
    },
    {
      id: 2,
      name: 'Snapback Cap',
      price: 29.99,
      image: '/kcee-img/caps2.jpeg',
      description: 'Retro snapback cap with flat brim'
    },
    {
      id: 3,
      name: 'Cap',
      price: 19.99,
      image: '/kcee-img/caps3.jpeg',
      description: 'Warm knitted beanie for cold weather'
    },
    {
      id: 4,
      name: 'Throw Pillow',
      price: 26.99,
      image: '/kcee-img/throw-pillow.jpeg',
      description: 'Mesh trucker cap with foam front'
    },
    {
      id: 5,
      name: 'Towel',
      price: 22.99,
      image: '/kcee-img/towel.jpeg',
      description: 'Casual bucket hat for outdoor activities'
    },
    {
      id: 6,
      name: 'Towel',
      price: 34.99,
      image: '/kcee-img/towel2.jpeg',
      description: 'Elegant fedora hat for formal occasions'
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const orderViaWhatsApp = (product) => {
  const message = `Hi! I'd like to order:

🛍️ Product: ${product.name}
💰 Price: $${product.price}

📸 Image: ${product.image}
`;

  const whatsappUrl = `https://wa.me/7039146198?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

  return (
    <section className="category-section">
      <div className="category-container">
        <div className="category-header">
          <button className="back-btn" onClick={onBack}>
            ← Back to Shop
          </button>
          <h2 className="category-title">Caps Collection</h2>
          <p className="category-description">
            Complete your look with our stylish collection of caps and hats
          </p>
        </div>

        <div className="products-grid">
          {caps.map((product) => (
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

export default CapsSection;