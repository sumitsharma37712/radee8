import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Style
import './Header.css';

// Images
import Logo from '../../assets/images/logo.png';

const Header = () => {
  const [menu, setMenu] = useState(true);
  const [sticky, setSticky] = useState(false);
  const menuHandler = () => {
    setMenu(!menu);
  };

  const stickyHeader = () => {
    window.addEventListener('scroll', function () {
      window.scrollY > 150 ? setSticky(true) : setSticky(false);
    });
  };

  useEffect(() => {
    stickyHeader();
  }, []);

  return (
    <header className={sticky ? 'sticky' : ''}>
      <div className="container">
        <nav className="nav" id="nav">
          <div className="nav-inner">
            <Link to="/">
              <img src={Logo} alt="Logo" title="RADEE8" className="logo"></img>
            </Link>
            <ul
              className={
                menu
                  ? 'row align-items-center menus'
                  : 'row align-items-center menus active'
              }
            >
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us">About Us</Link>
                
              </li>
              <li className="nav-item">
                <Link to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/success-story">Success Story</Link>
                <div className="submenu">
                  <ul>
                    <li>
                      <Link to="/">Submenu 1</Link>
                    </li>
                    <li>
                      <Link to="/"> Submenu 2</Link>
                    </li>
                    <li>
                      <Link to="/">Submenu 3</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <button
              className={menu ? 'hamburger' : 'hamburger active'}
              onClick={menuHandler}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
