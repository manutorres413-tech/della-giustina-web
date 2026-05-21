import React, { useState } from 'react';
import { MessageCircle, Check } from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: 'Queso Pategrás', category: 'Quesos', desc: 'Horma entera o media horma', image: '/images/pategras.png' },
  { id: 2, name: 'Queso Gouda', category: 'Quesos', desc: 'Sabor suave y textura cremosa', image: '/images/gouda.png' },
  { id: 3, name: 'Jamón Cocido Natural', category: 'Fiambres', desc: 'Primera marca, excelente calidad', image: '/images/jamon.png' },
  { id: 4, name: 'Salame de Milán', category: 'Fiambres', desc: 'Curado artesanal', image: '/images/salame.png' },
  { id: 5, name: 'Prepizza de Tomate', category: 'Prepizzas', desc: 'Elaboración propia, pack x 5', image: '/images/prepizzas.png' },
];

const CATEGORIES = ['Todos', 'Quesos', 'Fiambres', 'Prepizzas'];

export default function Catalog() {
  const [quantities, setQuantities] = useState({});
  const [address, setAddress] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const handleQuantityChange = (id, delta) => {
    setQuantities(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const generateWhatsAppMessage = () => {
    const selected = PRODUCTS.filter(p => quantities[p.id] > 0);
    if (selected.length === 0) return "Hola Della Giustina, me gustaría solicitar el listado completo de productos y consultar precios.";
    
    let message = "Hola Della Giustina, me gustaría solicitar el siguiente pedido estimativo:\n\n";
    selected.forEach(p => {
      message += `- ${quantities[p.id]}x ${p.name} (${p.category})\n`;
    });
    
    if (address.trim()) {
      message += `\n*Dirección de envío:* ${address}\n`;
    }
    
    message += "\nMuchas gracias.";
    return encodeURIComponent(message);
  };

  const filteredProducts = selectedCategory === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const selectedCount = Object.values(quantities).reduce((acc, curr) => acc + curr, 0);

  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <h1 className="section-title" style={{ marginBottom: '1rem' }}>Catálogo de Productos</h1>
        <p style={{ textAlign: 'center', marginBottom: '2.5rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          Armá tu pedido estimativo sumando las cantidades y envianos un WhatsApp. Te responderemos con la cotización exacta en minutos.
        </p>

        {/* Categorías de Filtro */}
        <div className="category-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-tab-btn ${selectedCategory === category ? 'active' : ''}`}
              style={{
                background: selectedCategory === category ? 'var(--color-primary)' : 'var(--color-bg-light)',
                color: selectedCategory === category ? 'var(--color-bg)' : 'var(--color-text-muted)',
                border: '1px solid rgba(197, 160, 89, 0.2)',
                padding: '0.6rem 1.5rem',
                borderRadius: '50px',
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'var(--transition)'
              }}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Grilla de productos filtrados */}
        <div className="grid" style={{ marginBottom: '5rem' }}>
          {filteredProducts.map(product => (
            <div key={product.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative' }}>
                <img src={product.image} alt={product.name} className="card-img" />
                {quantities[product.id] > 0 && (
                  <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'var(--color-primary)', color: 'var(--color-bg)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.9rem', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                    {quantities[product.id]}
                  </div>
                )}
              </div>
              <div className="card-content" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', display: 'block', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                    {product.category}
                  </span>
                  <h3 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{product.name}</h3>
                  <p className="card-desc" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>{product.desc}</p>
                </div>
                
                <div className="quantity-control" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.15)', padding: '0.5rem 1rem', borderRadius: 'var(--radius)' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Cantidad:</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button 
                      onClick={() => handleQuantityChange(product.id, -1)}
                      style={{ background: 'var(--color-bg)', border: '1px solid var(--color-primary)', color: 'var(--color-primary)', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 'bold' }}
                    >-</button>
                    <span style={{ fontWeight: 700, minWidth: '15px', textAlign: 'center' }}>{quantities[product.id] || 0}</span>
                    <button 
                      onClick={() => handleQuantityChange(product.id, 1)}
                      style={{ background: 'var(--color-bg)', border: '1px solid var(--color-primary)', color: 'var(--color-primary)', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 'bold' }}
                    >+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Información de Envíos y Resumen */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3rem', marginBottom: '5rem' }} className="prepizzas-grid">
          <div style={{ background: 'var(--color-bg-light)', padding: '2.5rem', borderRadius: 'var(--radius)', border: '1px solid rgba(197, 160, 89, 0.15)', boxShadow: '0 8px 25px rgba(0,0,0,0.2)' }}>
            <h3 style={{ marginBottom: '1.2rem', color: 'var(--color-primary)', fontSize: '1.3rem', fontFamily: 'var(--font-sans)' }}>Información de Envíos</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.7' }}>
              Realizamos repartos diarios en toda la ciudad. Si te encontrás en una zona alejada o rural de Gualeguaychú, coordinamos el envío mediante una cadetería local de confianza.
            </p>
            <input 
              type="text" 
              placeholder="Ingresá tu dirección de envío (opcional)" 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{ width: '100%', padding: '0.9rem 1.2rem', borderRadius: '8px', border: '1px solid rgba(197, 160, 89, 0.3)', background: 'var(--color-bg)', color: 'var(--color-text)', fontFamily: 'var(--font-sans)', fontSize: '0.95rem', outline: 'none', transition: 'var(--transition)' }}
              className="address-input"
            />
          </div>

          <div style={{ background: 'var(--color-bg-light)', padding: '2.5rem', borderRadius: 'var(--radius)', border: '1px solid rgba(197, 160, 89, 0.15)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 8px 25px rgba(0,0,0,0.2)' }}>
            <div>
              <h3 style={{ marginBottom: '1.2rem', color: 'var(--color-primary)', fontSize: '1.3rem', fontFamily: 'var(--font-sans)' }}>Resumen de Solicitud</h3>
              <div style={{ borderBottom: '1px solid rgba(197, 160, 89, 0.1)', paddingBottom: '1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)' }}>
                <span>Productos seleccionados:</span>
                <span style={{ fontWeight: 'bold', color: 'var(--color-text)' }}>{selectedCount} unidades</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                *Al presionar el botón de abajo se abrirá WhatsApp con el listado detallado para recibir cotización de forma directa e inmediata.
              </p>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <a 
                href={`https://wa.me/5493446415003?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ width: '100%', background: '#25D366', borderColor: '#25D366', color: 'white', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'center', gap: '0.8rem', fontSize: '1.05rem' }}
              >
                <MessageCircle size={20} /> Solicitar Cotización
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
