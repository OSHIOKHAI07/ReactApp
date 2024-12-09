import React from 'react';
import logo from '../assets/little-lemon-logo.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" style={{ width: '150px', height: 'auto' }} />
      <h1>Welcome to Little Lemon</h1>
    </header>
  );
}

export default Header;

