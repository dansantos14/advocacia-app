import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UsuarioForm from './UsuarioForm';

const UsuarioList = () => {
  const [usuarios, setUsuarios] = useState([]);

  const fetchUsuarios = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/usuarios`);
    setUsuarios(response.data);
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const handleSubmit = async (novoUsuario) => {
    await axios.post(`${import.meta.env.VITE_API_URL}/usuarios`, novoUsuario);
    fetchUsuarios();
  };

  return (
    <div>
      <UsuarioForm onSubmit={handleSubmit} />
      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            {u.login}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsuarioList;

