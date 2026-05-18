import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <section className="hero" style={{ background: 'linear-gradient(rgba(26, 18, 12, 0.8), rgba(26, 18, 12, 0.95)), url("/images/hero_bg.png") center/cover' }}>
        <div className="container">
          <div className="hero-content">
            <h1>Quesos, Fiambres y Prepizzas</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-primary-light)', marginBottom: '0.5rem', fontWeight: 500 }}>
              Distribuidora mayorista y almacén minorista en Gualeguaychú
            </p>
            <p>
              Venta por mayor y menor con envíos a toda la ciudad. Fábrica propia de prepizzas con los mejores precios.
            </p>
            <div className="hero-buttons">
              <Link to="/catalogo" className="btn">
                Ver Productos <ChevronRight size={18} />
              </Link>
              <Link to="/prepizzas" className="btn btn-outline">
                Fábrica de Prepizzas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <div className="grid">
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Distribución Mayorista</h3>
                <p className="card-desc">
                  Abastecemos a comercios y gastronomía con los mejores precios del mercado. Atención personalizada y distribución eficiente.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Almacén Minorista</h3>
                <p className="card-desc">
                  Venta al público con la misma calidad de siempre. Vení a disfrutar de nuestra selección de quesos y fiambres por menor.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Fábrica de Prepizzas</h3>
                <p className="card-desc">
                  Elaboración propia de prepizzas con la mejor relación calidad-precio. Ideal para eventos y reventa.
                </p>
                <Link to="/prepizzas" style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Conocer más <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Seguinos en Instagram</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
            Enterate de todas nuestras novedades, promociones y nuevos ingresos.
          </p>
          
          {/* Instagram Feed Widget Container */}
          <div style={{ maxWidth: '900px', margin: '0 auto', background: 'var(--color-bg)', borderRadius: 'var(--radius)', border: '1px solid rgba(197, 160, 89, 0.2)', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
            {/* Widget de Elfsight (o similar) */}
            <div className="elfsight-app-placeholder" style={{ width: '100%', textAlign: 'center' }}>
              <div style={{ padding: '2rem', border: '1px dashed var(--color-primary-light)', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Mural de Instagram (En desarrollo)</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Acá se va a cargar automáticamente la grilla con tus últimas fotos de Instagram.</p>
                <a href="https://www.instagram.com/dellagiustinaquesosyfiambres/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', padding: '0.5rem 1.5rem' }}>
                  Ir al Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Encontranos</h2>
          <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid rgba(197, 160, 89, 0.2)', height: '400px' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.348633857342!2d-58.53075242337777!3d-33.02102167664871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95baa843e93146d9%3A0xc31752b04cdd4891!2sJuan%20Esteban%20D%C3%ADaz%202041%2C%20E2820%20Gualeguaych%C3%BA%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Ubicación Della Giustina"
            ></iframe>
          </div>
          <p style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--color-text-muted)' }}>
            <strong>Juan Esteban Díaz 2041, Gualeguaychú (2820)</strong><br/>
            Te esperamos con la mejor atención.
          </p>
        </div>
      </section>
    </main>
  );
}
