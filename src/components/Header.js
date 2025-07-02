// client/src/components/Header.js

import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import './Header.css';
import S_S_Logo from '../assets/ss-autos-logo.png';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Add this line to see what the Header gets on every render
  console.log('Header sees user:', user);

  const handleLogout = () => {
    logout();
    navigate('/signin'); // Redirect to sign-in page after logout
  };

  return (
    <header className="main-header">
      <div className="header-content">
        <Link to="/" className="header-logo">
          <img src={S_S_Logo} alt="S&S Autos" />
        </Link>
        <nav className="header-nav">
          {user ? (
            // If user is logged in, show Logout button
            <>
              <span className="welcome-message">Welcome, {user.firstName}</span>
              <button onClick={handleLogout} className="btn-logout">Logout</button>
            </>
          ) : (
            // If user is logged out, show Sign Up and Sign In links
            <>
              <Link to="/signup" className="nav-link">Sign Up</Link>
              <Link to="/signin" className="nav-link nav-link-primary">Sign In</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;