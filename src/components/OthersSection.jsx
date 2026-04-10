import React, { useState } from 'react';
import './Shop.css';
import { useCart } from './CartContext';

function OthersSection({ onBack }) {
   const { addToCart } = useCart();

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
      description: 'Tactical short pants with multiple pockets'
    },
    {
      id: 3,
      name: 'Top and Short',
      price: "20,000",
      image: '/kcee-img/top7.jpeg',
      description: 'Classic ice short with vintage wash'
    },
    {
      id: 4,
      name: 'Top and Short',
      price: "20,000",
      image: '/kcee-img/top8.jpeg',
      description: 'Comfortable crewneck short'
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
      description: 'Moisture-wicking athletic short for workouts'
    },
    {
      id: 8,
      name: 'Top',
      price: "20,000",
      image: '/kcee-img/top2.jpeg',
      description: 'Stylish bomber-style short '
    },
    {
      id: 9,
      name: 'Top',
      price: "20,000",
      image: '/kcee-img/top3.jpeg',
      description: 'Retro-inspired short with washed finish'
    }
    ,
    {
      id: 10,
      name: 'Joggars',
      price: "30,000",
      image: '/kcee-img/joggers.jpeg',
      description: 'Retro-inspired joggars with washed finish'
    }
    ,
    {
      id: 11,
      name: 'Top',
      price: "20,000",
      image: '/kcee-img/top12.jpeg',
      description: 'Retro-inspired Top with washed finish'
    },
    {
      id: 12,
      name: 'Top',
      price: "15,000",
      image: '/kcee-img/top13.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 13,
      name: 'Top',
      price: "15,000",
      image: '/kcee-img/top14.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    }
    ,
    {
      id: 14,
      name: 'Top',
      price: "20,000",
      image: '/kcee-img/top16.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 15,
      name: 'Top',
      price: "15,000",
      image: '/kcee-img/top17.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 16,
      name: 'Top',
      price: "15,000",
      image: '/kcee-img/top18.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 17,
      name: 'Top',
      price: "30,000",
      image: '/kcee-img/top19.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 18,
      name: 'Top',
      price: "10,000",
      image: '/kcee-img/top20.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 19,
      name: 'Top',
      price: "15,000",
      image: '/kcee-img/top21.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 20,
      name: 'Top',
      price: "20,000",
      image: '/kcee-img/top22.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 21,
      name: 'Top',
      price: "8,000",
      image: '/kcee-img/top23.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 22,
      name: 'Top',
      price: "12,000",
      image: '/kcee-img/top24.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 23,
      name: 'Top',
      price: "12,000",
      image: '/kcee-img/top25.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 24,
      name: 'Top',
      price: "12,000",
      image: '/kcee-img/top26.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 25,
      name: 'Top',
      price: "8,000",
      image: '/kcee-img/top27.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 26,
      name: 'Top',
      price: "12,000",
      image: '/kcee-img/top28.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 27,
      name: 'Top',
      price: "12,000",
      image: '/kcee-img/top29.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    }
    ,
    {
      id: 28,
      name: 'Top',
      price: "30,000",
      image: '/kcee-img/top30.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 29,
      name: 'Top',
      price: "12,000",
      image: '/kcee-img/top31.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 30,
      name: 'Top',
      price: "12,000",
      image: '/kcee-img/top32.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 31,
      name: 'Joggars',
      price: "40,000",
      image: '/kcee-img/j1.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 32,
      name: 'Joggars',
      price: "40,000",
      image: '/kcee-img/j2.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 33,
      name: 'Joggars',
      price: "40,000",
      image: '/kcee-img/j3.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 34,
      name: 'Joggars',
      price: "30,000",
      image: '/kcee-img/j4.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 35,
      name: 'Joggars',
      price: "15,000",
      image: '/kcee-img/j5.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 36,
      name: 'Joggars',
      price: "30,000",
      image: '/kcee-img/j6.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 37,
      name: 'Joggars',
      price: "25,000",
      image: '/kcee-img/j7.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 38,
      name: 'Joggars',
      price: "40,000",
      image: '/kcee-img/j8.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 39,
      name: 'Joggars',
      price: "40,000",
      image: '/kcee-img/j9.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 40,
      name: 'Joggars',
      price: "40,000",
      image: '/kcee-img/j10.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 41,
      name: 'Joggars',
      price: "30,000",
      image: '/kcee-img/j11.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 42,
      name: 'Luxury Bottle',
      price: "15,000",
      image: '/kcee-img/bottle1.jpeg',
      description: 'For your refreshed cold drinks'
    },
    {
      id: 43,
      name: 'Phone/ Mug',
      price: "20,000",
      image: '/kcee-img/phone-cover.jpeg',
      description: 'Retro-inspired hoodie with washed finish'
    },
    {
      id: 44,
      name: 'Clock',
      price: "20,000",
      image: '/kcee-img/clock.jpeg',
      description: 'A luxury clock to beautify your home '
    },
    {
      id: 45,
      name: "Graphic T-Shirt",
      price: "8,000",
      image: "/kcee-img/round-neck.jpeg",
      description: 'A nice luxury Top for your nice body'
    }
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

export default OthersSection;