import React, { useState, useRef, useEffect } from 'react';
import { FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; // ✅ import context
import Cart from './Cart';                          // ✅ import cart drawer
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const navRef = useRef(null);

  // ✅ Get cart data from context — not local state
  const { totalItems } = useCart();

  // Close menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      <nav className="navbar" ref={navRef}>

        {/* Brand */}
        <h2 className="brand">KCEE CLOTHING</h2>

        {/* Desktop links */}
        <ul className={`desktop-menu ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        {/* Icons + hamburger */}
        <div className="nav-right">
          <div className="nav-icons">
            <FaUser className="nav-icon, user"  />

            {/* ✅ totalItems now comes from CartContext */}
            <div
              className="cart-icon-wrap"
              onClick={() => { setCartOpen(true); setMenuOpen(false); }}
            >
              <FaShoppingCart className="nav-icon" />
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </div>
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(prev => !prev)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

      </nav>

      {/* ✅ Cart drawer — also reads from CartContext internally */}
      {cartOpen && <Cart onClose={() => setCartOpen(false)} />}
    </>
  );
}

export default Navbar;