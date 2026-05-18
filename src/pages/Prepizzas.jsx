import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle } from 'lucide-react';

export default function Prepizzas() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <section className="hero" style={{ minHeight: '60vh', background: 'linear-gradient(rgba(26, 18, 12, 0.8), rgba(26, 18, 12, 0.95)), url("https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2070") center/cover' }}>
        <div className="container">
          <div className="hero-content">
            <h1 style={{ color: 'var(--color-primary)' }}>Nuestra Fábrica de Prepizzas</h1>
            <p>
              Elaboración propia con ingredientes seleccionados. La opción más rentable y deliciosa para tu negocio.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prepizzas-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>¿Por qué elegir nuestras prepizzas?</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                Como fabricantes directos, podemos ofrecer un producto de altísima calidad a un costo imbatible en el mercado. Ideal para reventa, rotiserías, eventos y supermercados.
              </p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <CheckCircle color="var(--color-primary)" />
                  <span>Masa esponjosa y base crocante</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <CheckCircle color="var(--color-primary)" />
                  <span>Salsa de tomate de primera línea</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <CheckCircle color="var(--color-primary)" />
                  <span>El precio más competitivo (venta directa de fábrica)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <CheckCircle color="var(--color-primary)" />
                  <span>Excelente margen de ganancia para tu negocio</span>
                </li>
              </ul>
              
              <Link to="/catalogo" className="btn">
                Cotizar Prepizzas <ChevronRight size={18} />
              </Link>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=1000" 
                alt="Elaboración de Pizzas" 
                style={{ width: '100%', borderRadius: 'var(--radius)', border: '2px solid var(--color-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} 
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
