// Arquivo: src/components/Menu.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    // Navbar do Bootstrap, com tema escuro
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        {/* Link da "marca" ou página inicial */}
        <Link className="navbar-brand" to="/">
          Advocacia App
        </Link>

        {/* Botão para menu responsivo em telas pequenas */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Conteúdo do Menu que será recolhido em telas menores */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {/* Links principais alinhados à esquerda */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/clientes">
                Clientes
              </Link>
            </li>
            <li className="nav-item">
              {/* Alterado para apontar para o cadastro de novo processo */}
              <Link className="nav-link" to="/processos/novo">
                Processos
              </Link>
            </li>
            <li className="nav-item">
              {/* Alterado para apontar de volta para a lista de faturamentos */}
              <Link className="nav-link" to="/faturamento">
                Faturamento
              </Link>
            </li>
          </ul>

          {/* Links de administração/login alinhados à direita */}
          <ul className="navbar-nav ms-auto">
             <li className="nav-item">
              <Link className="nav-link" to="/usuarios">
                Usuários
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;