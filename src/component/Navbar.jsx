import React, { useState, useEffect } from 'react';
import { FaAws, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/service', label: 'Service' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' }
  ];

  // Properly handle window resize and initial load
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    // Set initial value
    handleResize();
    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      backgroundColor: '#08080e',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '80px',
      width: '100%',
      padding: '0 16px',
      position: 'relative',
      zIndex: 50
    }}>
      {/* Logo */}
      <div style={{
        color: 'white',
        fontWeight: 'bold',
        fontSize: '25px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer'
      }}>
        <FaAws className="FaAws"/>
        PushAndDeploy
      </div>

      {/* Desktop Menu - shows only on desktop */}
      {isDesktop && (
        <div style={{
          display: 'flex',
          gap: '25px'
        }}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                color: isActive ? '#d1d11d' : 'white',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s',
                fontSize: '20px'
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}

      {/* Mobile Menu Button - shows only on mobile */}
      {!isDesktop && (
        <button
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      {/* Mobile Menu Dropdown */}
      {!isDesktop && mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          backgroundColor: '#08080e',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          padding: '20px 0',
          alignItems: 'center',
          boxShadow: '0 10px 15px rgba(0,0,0,0.1)'
        }}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? '#d1d11d' : 'white',
                fontWeight: '600',
                textDecoration: 'none',
                fontSize: '18px',
                width: '100%',
                textAlign: 'center',
                padding: '12px 0'
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;