import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <i  class="fas fa-route"></i>
          </Link>
        <div className='navbar-container'>
          {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <i  class="fas fa-route"></i>
          </Link> */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/TOURS'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                TOURS
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/SERVICES'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SERVICES
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/CONTACT'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                CONTACT
                </Link>
                </li>
                <li className="nav-item">
              <Link
                to='/ABOUT'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ABOUT
              </Link>
            </li>
            </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;