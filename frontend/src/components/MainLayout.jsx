import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './Menu';

const MainLayout = () => {
  return (
    <>
      <Menu />
      <main className="container mt-4">
        {/* O <Outlet> renderiza o componente da rota filha (Clientes, Processos, etc.) */}
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;