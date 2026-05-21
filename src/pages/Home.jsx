import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle, HelpCircle, Phone, ArrowRight, MessageSquare } from 'lucide-react';

const FAQS = [
  {
    q: "¿Cómo realizo un pedido?",
    a: "¡Es súper fácil! Ingresá a nuestro Catálogo en esta web, seleccioná las cantidades estimadas de los productos que te interesen, completá tu dirección (opcional) y presioná el botón verde. Automáticamente se generará un mensaje detallado para enviar directamente a nuestro WhatsApp y cerrar el pedido con nosotros al instante."
  },
  {
    q: "¿Qué medios de pago aceptan?",
    a: "Para tu comodidad, aceptamos efectivo al momento de la entrega o retiro, transferencias bancarias directas y pagos digitales a través de Mercado Pago (dinero en cuenta, tarjetas o código QR)."
  },
  {
    q: "¿Cómo coordinan los envíos a domicilio?",
    a: "Realizamos repartos diarios en toda la ciudad de Gualeguaychú. Si sos comerciante o tenés un local gastronómico, coordinamos días y horarios fijos de entrega sin costo. Si sos particular y estás en una zona alejada de nuestro local, coordinamos el envío mediante una cadetería de total confianza."
  },
  {
    q: "¿Tienen precios especiales para pizzerías o eventos?",
    a: "¡Por supuesto! Como fabricamos nuestras propias prepizzas y distribuimos hormas de queso muzzarella y fiambres por mayor, podemos ofrecerte bonificaciones y precios altamente competitivos según el volumen de tu compra. Escribinos directamente a nuestra sección Mayorista para recibir una cotización a medida."
  },
  {
    q: "¿En qué horarios están abiertos?",
    a: "Te esperamos de lunes a domingos en doble turno. Por la mañana de 9:00 a 13:00 hs, y por la tarde de 17:00 hs en adelante (lunes a jueves cerramos a las 22:00, viernes y sábados extendemos hasta las 23:00 y domingos hasta las 21:00 hs)."
  }
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ background: 'linear-gradient(rgba(26, 18, 12, 0.8), rgba(26, 18, 12, 0.95)), url("/images/hero_bg.png") center/cover' }}>
        <div className="container">
          <div className="hero-content">
            <h1>Quesos, Fiambres y Prepizzas</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-primary-light)', marginBottom: '0.5rem', fontWeight: 500 }}>
              Distribuidora mayorista y almacén minorista en Gualeguaychú
            </p>
            <p>
              Venta directa de fábrica de prepizzas con precios imbatibles. Selección premium de fiambres y quesos con envíos a toda la ciudad.
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

      {/* Nuestros Servicios */}
      <section className="section" style={{ background: 'var(--color-bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <div className="grid">
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Distribución Mayorista</h3>
                <p className="card-desc">
                  Abastecemos a comercios, despensas y gastronomía con los mejores precios del mercado. Atención personalizada y distribución eficiente en toda la ciudad.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Almacén Minorista</h3>
                <p className="card-desc">
                  Venta al público con la mejor calidad. Vení a buscar nuestra selección especial de quesos y fiambres feteados en el momento para tus picadas.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Fábrica de Prepizzas</h3>
                <p className="card-desc">
                  Elaboración diaria propia con materias primas seleccionadas. La base perfecta para tu pizzería, rotisería o evento familiar.
                </p>
                <Link to="/prepizzas" style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Conocer más <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Mayorista */}
      <section className="section" style={{ borderBottom: '1px solid rgba(197, 160, 89, 0.1)' }}>
        <div className="container">
          <div className="wholesale-box" style={{ background: 'linear-gradient(135deg, var(--color-bg-light), #32251a)', padding: '3.5rem 3rem', borderRadius: 'var(--radius)', border: '1px solid rgba(197, 160, 89, 0.2)', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem' }}>
                Atención Exclusiva a Comercios
              </span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.2rem', textAlign: 'left', color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>
                ¿Tenés un almacén, fiambrería o rotisería?
              </h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
                Queremos ser tu distribuidor de confianza. Abastecemos de forma programada a locales comerciales y gastronómicos en todo Gualeguaychú con precios de fábrica directos y stock permanente garantizado.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--color-text)' }}>
                  <CheckCircle size={18} color="var(--color-primary)" />
                  <span style={{ fontSize: '0.95rem' }}>Precios de fábrica directos</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--color-text)' }}>
                  <CheckCircle size={18} color="var(--color-primary)" />
                  <span style={{ fontSize: '0.95rem' }}>Repartos programados sin cargo</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--color-text)' }}>
                  <CheckCircle size={18} color="var(--color-primary)" />
                  <span style={{ fontSize: '0.95rem' }}>Stock permanente de quesos y fiambres</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--color-text)' }}>
                  <CheckCircle size={18} color="var(--color-primary)" />
                  <span style={{ fontSize: '0.95rem' }}>Atención directa, sin intermediarios</span>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ background: 'rgba(0,0,0,0.15)', padding: '2rem', borderRadius: '12px', border: '1px dashed rgba(197, 160, 89, 0.3)' }}>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-primary-light)', marginBottom: '1rem', fontFamily: 'var(--font-sans)' }}>Solicitar Lista Mayorista</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Escribinos para que te enviemos las condiciones especiales de distribución y precios por volumen.</p>
                <a 
                  href="https://wa.me/5493446415003?text=Hola%20Della%20Giustina%2C%20tengo%20un%20comercio%20en%20Gualeguaych%C3%BA%20y%20me%20gustar%C3%ADa%20recibir%20la%20lista%20de%20precios%20mayoristas%20y%20condiciones%20de%20reparto." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn" 
                  style={{ width: '100%', display: 'flex', gap: '0.5rem', background: '#25D366', borderColor: '#25D366', color: 'white' }}
                >
                  <Phone size={18} /> Contactar Mayoristas
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes Somos / Confianza y Cercanía */}
      <section className="section" style={{ background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '4rem', alignItems: 'center' }} className="prepizzas-grid">
            <div style={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000" 
                alt="Elaboración Della Giustina" 
                style={{ width: '100%', borderRadius: 'var(--radius)', border: '1px solid rgba(197, 160, 89, 0.2)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }} 
              />
              <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'var(--color-primary)', color: 'var(--color-bg)', padding: '1rem 1.5rem', borderRadius: '8px', fontWeight: 800, fontSize: '0.9rem', boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}>
                100% familiar
              </div>
            </div>
            <div>
              <span style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem' }}>
                Trabajo Honesto y Dedicación
              </span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.2rem', textAlign: 'left', color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>
                Calidad artesanal y trato bien cercano
              </h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.2rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
                Somos Della Giustina. Creemos que la buena comida y la atención cálida van de la mano. Nos esmeramos todos los días en seleccionar los mejores quesos y fiambres, y amasar con dedicación las prepizzas que abastecen a la ciudad. 
              </p>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
                Sabemos que detrás de cada comercio hay un esfuerzo enorme, por eso nos convertimos en tu socio para entregarte productos frescos, listos y con la mejor relación calidad-precio.
              </p>
              <Link to="/nosotros" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Conocé nuestra historia <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Encontranos */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Encontranos</h2>
          <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid rgba(197, 160, 89, 0.2)', height: '400px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
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
          <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
            📍 <strong>Juan Esteban Díaz 2041, Gualeguaychú (2820)</strong><br/>
            Vení a visitarnos o hacé tu pedido online. ¡Te esperamos!
          </p>
        </div>
      </section>

      {/* Preguntas Frecuentes (FAQs) */}
      <section className="section" style={{ background: 'var(--color-bg-light)', borderTop: '1px solid rgba(197, 160, 89, 0.1)' }}>
        <div className="container">
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto', color: 'var(--color-text-muted)' }}>
            ¿Tenés alguna duda? Despejá tus consultas sobre el proceso de compra, envíos y formas de pago.
          </p>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: 'var(--color-bg)', 
                  borderRadius: 'var(--radius)', 
                  border: '1px solid rgba(197, 160, 89, 0.1)', 
                  overflow: 'hidden', 
                  transition: 'var(--transition)',
                  boxShadow: activeFaq === idx ? '0 5px 15px rgba(0,0,0,0.2)' : 'none'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '1.5rem',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'var(--color-text)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    outline: 'none'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <HelpCircle size={20} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                    {faq.q}
                  </span>
                  <ChevronRight 
                    size={20} 
                    color="var(--color-primary)" 
                    style={{ 
                      transform: activeFaq === idx ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0
                    }} 
                  />
                </button>
                
                <div 
                  style={{ 
                    maxHeight: activeFaq === idx ? '500px' : '0px', 
                    overflow: 'hidden', 
                    transition: 'max-height 0.3s cubic-bezier(0, 1, 0, 1)',
                    background: 'rgba(255,255,255,0.01)'
                  }}
                >
                  <p style={{ 
                    padding: '0 1.5rem 1.5rem 3.3rem', 
                    color: 'var(--color-text-muted)', 
                    fontSize: '0.95rem', 
                    lineHeight: '1.7',
                    borderTop: '1px solid rgba(197, 160, 89, 0.05)'
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>¿Tenés otra consulta diferente?</p>
            <a 
              href="https://wa.me/5493446415003" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <MessageSquare size={18} /> Escribinos Directamente
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
