import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UsuarioForm from './UsuarioForm';

const UsuarioList = () => {
  const [usuarios, setUsuarios] = useState([]);

  const fetchUsuarios = async () => {
    const response = await axios.get('http://localhost:8080/usuarios');
    setUsuarios(response.data);
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const handleSubmit = async (novoUsuario) => {
    await axios.post('http://localhost:8080/usuarios', novoUsuario);
    fetchUsuarios();
  };

  return (
    <div>
      <h2></h2>
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
