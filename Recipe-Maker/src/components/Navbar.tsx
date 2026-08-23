import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useFavorites } from '../context/FavoritesContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { favorites } = useFavorites();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Static and NavLink routing demonstration.
  // We use standard React Router NavLink for automatically toggling active states without reloads.
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/recipes', label: 'Recipes' },
    { path: '/popular', label: 'Popular' },
    { path: '/favorites', label: 'Favorites', badgeCount: favorites.length },
    { path: '/about', label: 'About' }
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)',
        backdropFilter: 'blur(12px)',
        transition: 'background-color var(--transition-normal)'
      }}
    >
      <div className="container" style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'var(--primary)' }}
          onClick={closeMobileMenu}
        >
          <UtensilsCrossed size={26} strokeWidth={2.5} />
          <span style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
            Recipe<span style={{ color: 'var(--primary)' }}>Maker</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  style={({ isActive }) => ({
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                    position: 'relative',
                    padding: '8px 0',
                    transition: 'color var(--transition-fast)'
                  })}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                  {link.badgeCount !== undefined && link.badgeCount > 0 && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-4px',
                        right: '-16px',
                        backgroundColor: 'var(--primary)',
                        color: '#FFFFFF',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        borderRadius: '50%',
                        width: '16px',
                        height: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {link.badgeCount}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ThemeToggle />
          
          {/* Hamburger Mobile Menu Trigger */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              padding: '4px'
            }}
            className="mobile-menu-trigger"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '70px',
            left: 0,
            width: '100%',
            backgroundColor: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 99
          }}
          className="mobile-nav-panel"
        >
          <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none', padding: '1rem 0' }}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={closeMobileMenu}
                  style={({ isActive }) => ({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 1.5rem',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: isActive ? 'var(--primary)' : 'var(--text-primary)',
                    backgroundColor: isActive ? 'var(--primary-light)' : 'transparent',
                    borderLeft: isActive ? '4px solid var(--primary)' : '4px solid transparent'
                  })}
                >
                  <span>{link.label}</span>
                  {link.badgeCount !== undefined && link.badgeCount > 0 && (
                    <span
                      style={{
                        backgroundColor: 'var(--primary)',
                        color: '#FFFFFF',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        borderRadius: 'var(--radius-full)',
                        padding: '2px 8px'
                      }}
                    >
                      {link.badgeCount}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Custom styles specifically for responsive nav */}
      <style>{`
        @media (min-width: 769px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-menu-trigger {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .mobile-menu-trigger {
            display: flex !important;
          }
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary);
          transition: width var(--transition-fast);
        }
        .nav-link.active::after, .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </header>
  );
};
export default Navbar;
