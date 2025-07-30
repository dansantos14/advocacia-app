import React from "react";
import { Routes, Route } from "react-router-dom"; 

// Layouts e Páginas Principais
import LandingPage from "./components/LandingPage";
import MainLayout from "./components/MainLayout";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home"; // Pode ser um dashboard interno

// Componentes das rotas
import ClienteList from "./components/Cliente/ClienteList";
import ClienteForm from "./components/Cliente/ClienteForm";
import ClienteEditForm from "./components/Cliente/ClienteEditForm";
import ProcessoList from "./components/Processo/ProcessoList";
import ProcessoForm from "./components/Processo/ProcessoForm";
import UsuarioList from "./components/Usuario/UsuarioList";
import UsuarioForm from "./components/Usuario/UsuarioForm";
import FormFaturamento from "./components/Faturamento/FaturamentoForm";
import ListarFaturamentos from "./components/Faturamento/FaturamentoList";

function App() {
  return (
    <Routes>
      {/* Rota 1: Página de Apresentação (sem menu) */}
      <Route path="/" element={<LandingPage />} />
      
      {/* Rota 2: Página de Login (sem menu) */}
      <Route path="/login" element={<LoginForm />} />

      {/* Rota 3: Rotas Internas (com menu) */}
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/clientes" element={<ClienteList />} />
        <Route path="/clientes/novo" element={<ClienteForm />} />
        <Route path="/clientes/editar/:id" element={<ClienteEditForm />} />
        <Route path="/processos" element={<ProcessoList />} />
        <Route path="/processos/novo" element={<ProcessoForm />} />
        <Route path="/processos/editar/:numeroProcesso" element={<ProcessoForm />}/>
        <Route path="/usuarios" element={<UsuarioList />} />
        <Route path="/usuarios/novo" element={<UsuarioForm />} />
        <Route path="/usuarios/editar/:id" element={<UsuarioForm />} />
        <Route path="/faturamento" element={<ListarFaturamentos />} />
        <Route path="/faturamento/novo" element={<FormFaturamento />} />
      </Route>
    </Routes>
  );
}

export default App;