import React, { useState } from 'react';
import axios from 'axios';

const UsuarioForm = () => {
  const [usuario, setUsuario] = useState({
    login: '',
    senha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/usuarios`, usuario);
      alert('Usuário cadastrado com sucesso!');
      setUsuario({ login: '', senha: '' });
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Erro ao cadastrar usuário.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h4 className="text-center mb-4">Cadastro de Usuário</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="login" className="form-label">Login</label>
            <input
              type="text"
              className="form-control"
              id="login"
              name="login"
              value={usuario.login}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="senha" className="form-label">Senha</label>
            <input
              type="password"
              className="form-control"
              id="senha"
              name="senha"
              value={usuario.senha}
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UsuarioForm;


