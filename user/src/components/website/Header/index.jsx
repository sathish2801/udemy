import React, { useState } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const NavigationHeader = () => {
  const [activeItem, setActiveItem] = useState('');
  const [showNav, setShowNav] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const toggleMenu = () => {
    setShowNav(!showNav);
  };

  return (
    <div className='header container-fluid'>
      <div className="logo_name">
        <p>Nexemy</p>
      </div>
      <div className={`nav ${showNav ? 'show-nav' : ''}`}>
        <ul>
          <Link to="/" onClick={() => { handleItemClick('Home'); setShowNav(false); }}>
            <li className={activeItem === 'Home' ? 'active' : ''}>
              Home
            </li>
          </Link>
          <Link to="/course" onClick={() => { handleItemClick('Course'); setShowNav(false); }}>
            <li className={activeItem === 'Course' ? 'active' : ''}>
              Course
            </li>
          </Link>
          <li onClick={() => { handleItemClick('Live'); setShowNav(false); }}>
            Live
          </li>
          <li onClick={() => { handleItemClick('Discussion'); setShowNav(false); }}>
            Discussion
          </li>
          <Link to="/wish" onClick={() => { handleItemClick('Wishlist'); setShowNav(false); }}>
            <li className={activeItem === 'Wishlist' ? 'active' : ''}>
              Wishlist
            </li>
          </Link>
        </ul>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className="bi bi-list"></i>
      </div>
      <div className="user-options">
        <i className="bi bi-bell"></i>
        <Link to="/profile">
          <i className="bi bi-person-circle"></i>
        </Link>
      </div>
    </div>
  );
};

export default NavigationHeader;
