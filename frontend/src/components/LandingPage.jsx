import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

// Importe as imagens de fundo
import bg1 from '../assets/images/bg1.jpg';
import bg2 from '../assets/images/bg2.jpg';
import bg3 from '../assets/images/bg3.jpg';

const images = [bg1, bg2, bg3];

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const landingStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
  };

  return (
    <div className="landing-container" style={landingStyle}>
      <div className="landing-overlay"></div>
      
      <div className="landing-content">
        {/* O h1 foi alterado para incluir um span com uma classe para as iniciais */}
        <h1 className="mb-3">
          <span className="logo-initials">ES</span> Escritório de Advocacia
        </h1>
        <p>
          Gerencie seus processos, clientes e faturamentos de forma
          eficiente e organizada.
        </p>
        <Link to="/login" className="btn btn-primary btn-lg px-5 py-3">
          Acessar o Sistema
        </Link>
      </div>

      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;