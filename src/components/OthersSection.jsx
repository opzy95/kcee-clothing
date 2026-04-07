import React, { useState } from 'react';
import './Shop.css';

function OthersSection({ onBack }) {
  const [cart, setCart] = useState([]);

  const others = [
    {
      id: 1,
      name: 'Top and Short',
      price: "20,000",
      image: '/kcee-img/top.jpeg',
      description: 'Cotton t-shirt with unique graphic design'
    },
    {
      id: 2,
      name: 'Top and Short',
      price: "20,000",
      image: '/kcee-img/top5.jpeg',
      description: 'Tactical cargo pants with multiple pockets'
    },
    {
      id: 3,
      name: 'Top and Short',
      price: "20,000",
      image: '/kcee-img/top7.jpeg',
      description: 'Classic denim jacket with vintage wash'
    },
    {
      id: 4,
      name: 'Top and Short',
      price: "20,000",
      image: '/kcee-img/top8.jpeg',
      description: 'Comfortable crewneck sweatshirt'
    },
    {
      id: 5,
      name: 'Top and Short',
      price: "20,000",
      image: '/kcee-img/top9.jpeg',
      description: 'Athletic track pants with elastic waist'
    },
    {
      id: 6,
      name: 'Polo Shirt',
      price: "20,000",
      image: '/kcee-img/top10.jpeg',
      description: 'Classic polo shirt for smart casual wear'
    },{
      id: 7,
      name: 'Top',
      price: "20,000",
      image: '/kcee-img/top1.jpeg',
      description: 'Moisture-wicking athletic hoodie for workouts'
    },
    {
      id: 8,
      name: 'Top',
      price: "20,000",
      image: '/kcee-img/top2.jpeg',
      description: 'Stylish bomber-style hoodie with ribbed cuffs'
    },
    {
      id: 9,
      name: 'Top',
      price: "20,000",
      image: '/kcee-img/top3.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
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

  return (
    <section className="category-section">
      <div className="category-container">
        <div className="category-header">
          <button className="back-btn" onClick={onBack}>
            ← Back to Shop
          </button>
          <h2 className="category-title">Other Items</h2>
          <p className="category-description">
            Explore our collection of t-shirts, pants, jackets and more
          </p>
        </div>

        <div className="products-grid">
          {others.map((product) => (
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

export default OthersSection;