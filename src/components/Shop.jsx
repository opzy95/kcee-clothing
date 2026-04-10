import React, { useState } from "react";
import "./Shop.css";
import ShortsSection from "./ShortsSection";
import CapsSection from "./CapsSection";
import HoodiesSection from "./HoodiesSection";
import OthersSection from "./OthersSection";

function Shop() {
  const [currentSection, setCurrentSection] = useState("main"); // 'main', 'shorts', 'caps', 'hoodies', 'others'

  const categories = [
    {
      id: "shorts",
      title: "Shorts",
      description: "Comfortable and stylish shorts for every occasion",
      image: "/kcee-img/shorts.jpeg",
      items: 12,
    },
    {
      id: "caps",
      title: "Caps",
      description: "Trendy caps to complete your look",
      image: "/kcee-img/cap.jpeg",
      items: 8,
    },
    {
      id: "hoodies",
      title: "Hoodies",
      description: "Cozy hoodies for ultimate comfort",
      image: "/kcee-img/Hoodie.jpeg",
      items: 15,
    },
    {
      id: "others",
      title: "Others",
      description: "T-shirts, pants, and more accessories",
      image: "/kcee-img/top.jpeg",
      items: 24,
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Hoodie",
      price: "35,000",
      image: "/kcee-img/Hoodie2.jpeg",
      category: "hoodies",
    },
    {
      id: 2,
      name: "Sports Cap",
      price: "12,000",
      image: "/kcee-img/caps2.jpeg",
      category: "caps",
    },
    {
      id: 3,
      name: "Cargo Shorts",
      price: "12,000",
      image: "/kcee-img/shortss.jpeg",
      category: "shorts",
    },
    {
      id: 4,
      name: "Graphic T-Shirt",
      price: "8,000",
      image: "/kcee-img/round-neck.jpeg",
      category: "others",
    },
    {
      id: 5,
      name: "Athletic Joggers",
      price: "35,000",
      image: "/kcee-img/joggars.jpeg",
      category: "others",
    },
    {
      id: 6,
      name: "Designer Top",
      price: "20,000",
      image: "/kcee-img/top1.jpeg",
      category: "others",
    },
  ];

  const handleShopNow = (categoryId) => {
    setCurrentSection(categoryId);
  };

  const handleBack = () => {
    setCurrentSection("main");
  };

  if (currentSection === "shorts") {
    return <ShortsSection onBack={handleBack} />;
  }

  if (currentSection === "caps") {
    return <CapsSection onBack={handleBack} />;
  }

  if (currentSection === "hoodies") {
    return <HoodiesSection onBack={handleBack} />;
  }

  if (currentSection === "others") {
    return <OthersSection onBack={handleBack} />;
  }

  return (
    <section className="shop-section">
      <div className="shop-container">
        <div className="shop-header">
          <h2 className="shop-title">Shop Our Collection</h2>
          <p className="shop-subtitle">Discover the latest trends in fashion</p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-image-container">
                <img
                  src={category.image}
                  alt={category.title}
                  className="category-image"
                />
                <div className="category-overlay">
                  <div className="category-content">
                    <h3 className="category-title">{category.title}</h3>
                    <p className="category-description">
                      {category.description}
                    </p>
                    <div className="category-stats">
                      <span className="items-count">
                        {category.items} items
                      </span>
                    </div>
                    <button
                      className="shop-now-btn"
                      onClick={() => handleShopNow(category.id)}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="featured-products">
          <h3 className="featured-title">Featured Products</h3>
          <div className="products-grid">
            {featuredProducts.map((product) => (
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
                      onClick={() => alert(`Quick view: ${product.name}`)}
                    >
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-name">{product.name}</h4>
                  <p className="product-price">#{product.price}</p>
                  <div className="product-actions">
                    <button className="add-to-cart-btn">Add to Cart</button>
                    <button
                      className="whatsapp-order-btn"
                      onClick={() => {
                        const message = `Hi! I'd like to order: ${product.name} - #${product.price}`;
                        const whatsappUrl = `https://wa.me/7039146198?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, "_blank");
                      }}
                    >
                      Order via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Arrivals Section */}
        <div className="new-arrivals">
          <h3 className="section-title">New Arrivals</h3>
          <div className="new-arrivals-grid">
            <div className="arrival-item">
              <img
                src="/kcee-img/top2.jpeg"
                alt="New Top"
                className="arrival-image"
              />
              <div className="arrival-info">
                <h4>Fashion Top</h4>
                <p>#20,000</p>
              </div>
            </div>
            <div className="arrival-item">
              <img
                src="/kcee-img/top3.jpeg"
                alt="Designer Top"
                className="arrival-image"
              />
              <div className="arrival-info">
                <h4>Designer Top</h4>
                <p>#20,000</p>
              </div>
            </div>
            <div className="arrival-item">
              <img
                src="/kcee-img/caps3.jpeg"
                alt="Premium Cap"
                className="arrival-image"
              />
              <div className="arrival-info">
                <h4>Premium Cap</h4>
                <p>#12,000</p>
              </div>
            </div>
            <div className="arrival-item">
              <img
                src="/kcee-img/shorts3.jpeg"
                alt="Sport Shorts"
                className="arrival-image"
              />
              <div className="arrival-info">
                <h4>Sport Shorts</h4>
                <p>#8000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;