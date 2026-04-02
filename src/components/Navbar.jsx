import React, { useState } from 'react'; 
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'; 
import "./Navbar.css"; 
import { Link } from 'react-router-dom'; 

function Navbar() { 
  const [menuOpen, setMenuOpen] = useState(false); 

  return ( 
    <> 
      <nav style={{ backgroundColor: '#f8f9fa', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderBottom: '2px solid #007bff' }}> 
        {/* Brand */} 
        <h2>KCEE CLOTHING</h2> 
        {/* Desktop Menu */} 
        <ul className="desktop-menu"> 
          <li><Link to="/">Home</Link></li> 
         <li><Link to="/shop">Shop</Link></li> 
          <li><Link to="/about"> About</Link></li> 
          <li><Link to="/contact">Contact</Link></li> 
        </ul> 
        {/* Icons */} 
        <div className="icons"> 
          <FaSearch /> 
          <FaUser /> 
          <FaShoppingCart /> 
        </div> 
        {/* Hamburger */} 
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}> 
          {menuOpen ? <FaTimes /> : <FaBars />} 
        </div> 
      </nav> 
      {/* Mobile Menu */} 
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}> 
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link> 
        <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link> 
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link> 
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link> 
      </div> 
    </> 
  ); 
} 

export default Navbar;