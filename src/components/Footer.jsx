import React from 'react';
import { MapPin, Phone, Clock, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstagramIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Della Giustina</h4>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
              Distribuidora mayorista y almacén minorista de quesos, fiambres y fábrica de prepizzas.
            </p>
          </div>
          <div className="footer-col">
            <h4>Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/catalogo">Catálogo de Productos</Link></li>
              <li><Link to="/prepizzas">Fábrica de Prepizzas</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <ul className="footer-links">
              <li>
                <a href="https://wa.me/5493446415003" target="_blank" rel="noopener noreferrer">
                  <Phone size={18} /> 3446 41 - 5003
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/dellagiustinaquesosyfiambres/" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon size={18} /> @dellagiustinaquesosyfiambres
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <MapPin size={18} /> Juan Esteban Diaz 2041, Gualeguaychú
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Horarios y Envíos</h4>
            <ul className="footer-links">
              <li><Clock size={16} style={{display:'inline', marginRight:'8px'}}/> Lunes a jueves: 9-13hs y 17-22hs</li>
              <li><Clock size={16} style={{display:'inline', marginRight:'8px'}}/> Viernes y sábados: 9-13hs y 17-23hs</li>
              <li><Clock size={16} style={{display:'inline', marginRight:'8px'}}/> Domingos: 9-13hs y 17-21hs</li>
              <li style={{marginTop: '1rem', color: 'var(--color-primary)'}}>
                <Truck size={16} style={{display:'inline', marginRight:'8px'}}/> Envíos a toda la ciudad (cadetería a zonas alejadas)
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Della Giustina Quesos y Fiambres. Todos los derechos reservados.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--color-text-muted)', opacity: 0.6 }}>
            Desarrollado por <a href="https://www.linkedin.com/in/manueltorres02" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>MT</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
