import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: 'Queso Pategrás', category: 'Quesos', desc: 'Horma entera o media horma', image: '/images/pategras.png' },
  { id: 2, name: 'Queso Gouda', category: 'Quesos', desc: 'Sabor suave y textura cremosa', image: '/images/gouda.png' },
  { id: 3, name: 'Jamón Cocido Natural', category: 'Fiambres', desc: 'Primera marca, excelente calidad', image: '/images/jamon.png' },
  { id: 4, name: 'Salame de Milán', category: 'Fiambres', desc: 'Curado artesanal', image: '/images/salame.png' },
  { id: 5, name: 'Prepizza de Tomate', category: 'Prepizzas', desc: 'Elaboración propia, pack x 5', image: '/images/prepizzas.png' },
];

export default function Catalog() {
  const [quantities, setQuantities] = useState({});
  const [address, setAddress] = useState('');

  const handleQuantityChange = (id, delta) => {
    setQuantities(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const generateWhatsAppMessage = () => {
    const selected = PRODUCTS.filter(p => quantities[p.id] > 0);
    if (selected.length === 0) return "Hola, me gustaría recibir el listado completo de productos.";
    
    let message = "Hola Della Giustina, me gustaría solicitar el siguiente pedido:\n\n";
    selected.forEach(p => {
      message += `- ${quantities[p.id]}x ${p.name}\n`;
    });
    
    if (address.trim()) {
      message += `\n*Dirección de envío:* ${address}\n`;
    }
    
    message += "\nMuchas gracias.";
    return encodeURIComponent(message);
  };

  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <h1 className="section-title">Catálogo de Productos</h1>
        <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-text-muted)' }}>
          Selecciona las cantidades y presiona el botón inferior para solicitar cotización por WhatsApp.
        </p>
        
        <div className="grid" style={{ marginBottom: '5rem' }}>
          {PRODUCTS.map(product => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.name} className="card-img" />
              <div className="card-content">
                <h3 className="card-title">{product.name}</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', display: 'block', marginBottom: '0.5rem' }}>{product.category}</span>
                <p className="card-desc">{product.desc}</p>
                
                <div className="quantity-control">
                  <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                  <span>{quantities[product.id] || 0}</span>
                  <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ maxWidth: '600px', margin: '0 auto 5rem auto', background: 'var(--color-bg-light)', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid rgba(197, 160, 89, 0.2)' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Información de Envío</h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>
            Hacemos repartos a toda la ciudad. Si te encontrás en una zona alejada, el envío se coordina mediante cadetería.
          </p>
          <input 
            type="text" 
            placeholder="Ingresá tu dirección (opcional)" 
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--color-primary)', background: 'transparent', color: 'var(--color-text)', fontFamily: 'var(--font-sans)', outline: 'none' }}
          />
        </div>
      </div>

      {/* CTA for sending WhatsApp with order */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '3rem' }}>
        <a 
          href={`https://wa.me/5493446415003?text=${generateWhatsAppMessage()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{ background: '#25D366', borderColor: '#25D366', color: 'white', padding: '1rem 2rem', fontSize: '1.1rem' }}
        >
          <MessageCircle size={22} /> Solicitar Cotización
        </a>
      </div>
    </main>
  );
}
