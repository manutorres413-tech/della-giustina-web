import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Prepizzas from './pages/Prepizzas';
import './App.css';

// Componente para scrollear arriba al cambiar de ruta
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/prepizzas" element={<Prepizzas />} />
      </Routes>
      <WhatsAppFab />
      <Footer />
    </>
  );
}

export default App;
