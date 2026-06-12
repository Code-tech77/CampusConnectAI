import React from 'react';
import { MapPin, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="glass-panel-elegant" style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.25rem 4rem',
      zIndex: 1000,
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      borderRadius: '0'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{
          width: '45px',
          height: '45px',
          background: 'var(--kcl-logo-red)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.8rem',
          boxShadow: '0 4px 15px rgba(215, 26, 33, 0.4)'
        }} className="font-serif">
          K
        </div>
        <Link to="/" style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.4rem',
          letterSpacing: '0.5px',
          display: 'flex',
          flexDirection: 'column',
          lineHeight: '1.1'
        }} className="font-serif">
          <span style={{ fontWeight: '700' }}>Campus</span>
          <span style={{ fontWeight: '400', fontStyle: 'italic', fontSize: '1rem' }}>Connect AI</span>
        </Link>
      </div>

      <div style={{ display: 'flex', gap: '3rem' }}>
        <NavLink href="#campuses" text="Campuses" />
        <NavLink href="#history" text="History" />
        <NavLink href="#collections" text="Collections" />
      </div>

      <a href="#campuses" className="elegant-button" style={{ padding: '0.6rem 1.5rem', fontSize: '0.8rem', textDecoration: 'none' }}>
        Virtual Tour
      </a>
    </nav>
  );
};

const NavLink = ({ href, text }) => (
  <a href={href} style={{
    color: 'var(--text-muted)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '500',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'color 0.3s ease',
  }}
    onClick={(e) => {
      if (window.location.pathname !== '/') {
        window.location.href = '/' + href;
      } else {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    onMouseOver={(e) => { e.currentTarget.style.color = 'white'; }}
    onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
  >
    {text}
  </a>
);

export default Navbar;
