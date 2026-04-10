import React, { useState } from 'react';
import './Shop.css';
import { useCart } from './CartContext';

function HoodiesSection({ onBack }) {
  const { addToCart } = useCart();

  const hoodies = [
    {
      id: 1,
      name: 'Classic Hoodie',
      price: "30,000",
      image: '/kcee-img/Hoodie.jpeg',
      description: 'Comfortable cotton blend hoodie with kangaroo pocket'
    },
    {
      id: 2,
      name: 'Zip Hoodie',
      price: "35,000",
      image: '/kcee-img/Hoodie2.jpeg',
      description: 'Full-zip hoodie with fleece lining'
    },
    {
      id: 3,
      name: ' Kids Wear',
      price: "10,000",
      image: '/kcee-img/top-kids.jpeg',
      description: 'Trendy nice short for street style'
    },
    {
      id: 4,
      name: 'Joggars',
      price: "35,000",
      image: '/kcee-img/joggars.jpeg',
      description: 'Lightweight beach shorts perfect for summer'
    },
    {
      id: 5,
      name: 'Joggars',
      price: "35,000",
      image: '/kcee-img/joggars (2).jpeg',
      description: 'Elegant chino shorts for smart casual looks'
    },
    
  ];

  const orderViaWhatsApp = (product) => {
    const message = `Hi! I'd like to order: ${product.name} - #${product.price}`;
    const whatsappUrl = `https://wa.me/7039146198?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="category-section">
      <div className="category-container">
        <div className="category-header">
          <button className="back-btn" onClick={() => { console.log('Back button clicked'); onBack(); }}>
  ← Back to Shop
</button>
          <h2 className="category-title">Hoodies Collection</h2>
          <p className="category-description">
            Stay warm and stylish with our premium hoodie collection
          </p>
        </div>

        <div className="products-grid">
          {hoodies.map((product) => (
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
                <p className="product-price">#{product.price}</p>

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

        {/* {cart.length > 0 && (
          <div className="cart-summary">
            <h3>Cart Summary ({cart.length} items)</h3>
            <div className="cart-items">
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <span>{item.name}</span>
                  <span>#{item.price}</span>
                </div>
              ))}
            </div>
            <div className="cart-total">
  <strong>
    Total: ₦{cart.reduce((total, item) => {
      const price = parseFloat(String(item.price).replace(/,/g, ''));
      return total + price * item.quantity;
    }, 0).toLocaleString()}
  </strong>
</div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        )} */}
      </div>
    </section>
  );
}

export default HoodiesSection;