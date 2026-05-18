import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFab() {
  return (
    <a 
      href="https://wa.me/5493446415003?text=Hola,%20me%20gustaría%20hacer%20una%20consulta" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fab"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={30} />
    </a>
  );
}
