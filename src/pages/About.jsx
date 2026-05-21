import React from 'react';
import { Award, ShieldCheck, Smile } from 'lucide-react';

export default function About() {
  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
      {/* Mini Hero */}
      <section className="about-hero" style={{ background: 'linear-gradient(rgba(26, 18, 12, 0.85), rgba(26, 18, 12, 0.98)), url("https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1500") center/cover' }}>
        <div className="container" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
          <span style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>
            Tradición y Calidad en Gualeguaychú
          </span>
          <h1 style={{ fontSize: '3rem', color: 'var(--color-text)', marginBottom: '1rem' }}>Nuestra Historia</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
            Un proyecto familiar que nació con el objetivo de llevar los mejores quesos, fiambres y prepizzas de elaboración propia a la mesa de cada vecino.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center', marginBottom: '5rem' }} className="prepizzas-grid">
            <div>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)' }}>
                Cómo empezó Della Giustina
              </h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
                En **Della Giustina** comenzamos con una idea muy simple pero firme: queríamos ser la distribuidora y el almacén donde nosotros mismos elegiríamos comprar. Con el tiempo, nos dimos cuenta de que podíamos aportar algo más a la gastronomía local de Gualeguaychú, y fue así como fundamos nuestra propia **fábrica de prepizzas artesanal**.
              </p>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
                Hoy en día combinamos dos mundos bajo el mismo techo. Por un lado, la **distribución mayorista** y venta minorista de una selección impecable de quesos y fiambres de primera calidad. Por el otro, la elaboración diaria en nuestra fábrica de prepizzas, donde controlamos cada ingrediente para garantizar bases esponjosas, salsas bien sazonadas y el precio más conveniente del mercado para comercios, rotiserías y familias.
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.8', fontStyle: 'italic', borderLeft: '3px solid var(--color-primary)', paddingLeft: '1rem' }}>
                "No buscamos ser una corporación masiva, sino tu distribuidora de confianza. Esa que te atiende por tu nombre y se asegura de que recibas exactamente lo que tu comercio o tu mesa familiar necesita, todos los días."
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ background: 'var(--color-bg-light)', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid rgba(197, 160, 89, 0.1)' }}>
                <h4 style={{ color: 'var(--color-primary)', fontSize: '1.1rem', marginBottom: '1rem', fontFamily: 'var(--font-sans)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Award size={20} /> Origen local
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                  Nacidos y establecidos en Gualeguaychú, Entre Ríos. Entendemos el paladar de la ciudad y el ritmo de los comercios locales.
                </p>
              </div>

              <div style={{ background: 'var(--color-bg-light)', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid rgba(197, 160, 89, 0.1)' }}>
                <h4 style={{ color: 'var(--color-primary)', fontSize: '1.1rem', marginBottom: '1rem', fontFamily: 'var(--font-sans)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <ShieldCheck size={20} /> Calidad Seleccionada
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                  Probamos y seleccionamos cada horma de queso, cada pieza de fiambre y controlamos paso a paso el amasado de nuestras prepizzas.
                </p>
              </div>

              <div style={{ background: 'var(--color-bg-light)', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid rgba(197, 160, 89, 0.1)' }}>
                <h4 style={{ color: 'var(--color-primary)', fontSize: '1.1rem', marginBottom: '1rem', fontFamily: 'var(--font-sans)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Smile size={20} /> Trato Personalizado
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                  Nada de contestadores automáticos fríos. Nos escribís por WhatsApp, coordinamos juntos y te lo enviamos a domicilio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Elaboramos */}
      <section className="section" style={{ background: 'var(--color-bg-light)', borderTop: '1px solid rgba(197, 160, 89, 0.1)', borderBottom: '1px solid rgba(197, 160, 89, 0.1)' }}>
        <div className="container">
          <h2 className="section-title">El Secreto de Nuestra Fábrica</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem auto', color: 'var(--color-text-muted)' }}>
            Te contamos de manera transparente cómo trabajamos en la elaboración diaria de nuestras famosas prepizzas.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem' }}>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.1)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', fontSize: '1.5rem', fontWeight: 800, border: '1px solid var(--color-primary)' }}>1</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text)', marginBottom: '0.8rem', fontFamily: 'var(--font-sans)' }}>Ingredientes de Primera</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                Usamos harinas seleccionadas y levadura fresca. Nada de conservantes artificiales ni aditivos que le saquen el sabor casero.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.1)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', fontSize: '1.5rem', fontWeight: 800, border: '1px solid var(--color-primary)' }}>2</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text)', marginBottom: '0.8rem', fontFamily: 'var(--font-sans)' }}>Amasado y Leudado Lento</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                Le damos a la masa el tiempo de descanso necesario para lograr esa textura esponjosa por dentro y con base súper crocante.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.1)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', fontSize: '1.5rem', fontWeight: 800, border: '1px solid var(--color-primary)' }}>3</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text)', marginBottom: '0.8rem', fontFamily: 'var(--font-sans)' }}>Salsa Bien Casera</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                Condimentamos nuestra salsa de tomate natural con orégano y un toque especial, distribuyéndola de forma generosa en cada prepizza.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.1)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', fontSize: '1.5rem', fontWeight: 800, border: '1px solid var(--color-primary)' }}>4</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text)', marginBottom: '0.8rem', fontFamily: 'var(--font-sans)' }}>Horneado de Precisión</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                Cocinamos a temperatura alta y justa para sellar la base. Te llegan perfectas y listas para que solo tengas que ponerles queso y calentar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>¿Querés probar la calidad Della Giustina?</h2>
          <p style={{ maxWidth: '500px', margin: '0 auto 2rem auto', color: 'var(--color-text-muted)' }}>
            Echale un vistazo a nuestro catálogo interactivo. Armá tu pedido estimativo y mandanos un WhatsApp para cotizar al instante.
          </p>
          <a href="/catalogo" className="btn" style={{ padding: '1rem 2.5rem' }}>
            Explorar Catálogo de Productos
          </a>
        </div>
      </section>
    </main>
  );
}
