// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>SpiderSync Tech Solutions</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/missao">Missão</Link></li>
          <li><Link to="/valores">Valores</Link></li>
          <li><Link to="/quem-somos">Quem Somos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
