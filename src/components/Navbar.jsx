import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const InstagramIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <img src="/Logo_DellaGiustina.jpg" alt="Della Giustina Logo" onError={(e) => e.target.style.display = 'none'} />
          <div>DELLA <span>GIUSTINA</span></div>
        </Link>

        {/* Hamburger button - mobile only */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <ul className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Inicio</Link>
          </li>
          <li>
            <Link to="/nosotros" className={location.pathname === '/nosotros' ? 'active' : ''} onClick={closeMenu}>Nosotros</Link>
          </li>
          <li>
            <Link to="/catalogo" className={location.pathname === '/catalogo' ? 'active' : ''} onClick={closeMenu}>Catálogo</Link>
          </li>
          <li>
            <Link to="/prepizzas" className={location.pathname === '/prepizzas' ? 'active' : ''} onClick={closeMenu}>Fábrica Prepizzas</Link>
          </li>
          <li className="nav-social">
            <a href="https://www.instagram.com/dellagiustinaquesosyfiambres/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon size={20} />
            </a>
          </li>
          <li className="nav-social">
            <a href="https://wa.me/5493446415003" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <Phone size={20} />
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && <div className="nav-overlay" onClick={closeMenu} />}
    </nav>
  );
}
