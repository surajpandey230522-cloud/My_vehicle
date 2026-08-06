import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>MyVehicle</h2>
      </div>

      <ul className="nav-links">
       
        <li><Link to="/">Hero</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <div className="search-wrapper">
  <input
    type="text"
    id="searchInput"
    placeholder="Search nature..."
    aria-label="Search"
  />
  <button id="searchBtn">
    <i className="fas fa-search" /> Go
  </button>
</div>
      </ul>
    </nav>
  );
}

export default Navbar;



