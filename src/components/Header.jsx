import React from 'react';
import '../styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Algari</div>
      <nav className="nav-links">
        <a href="#herocarousel">Home</a>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#booking">Book Now</a>
      </nav>
    </header>
  );
};

export default Header;
