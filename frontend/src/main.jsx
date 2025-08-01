import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 
import { BrowserRouter } from 'react-router-dom'

// Importe os estilos globais aqui
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './components/LandingPage.css'; // Importe o novo CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

