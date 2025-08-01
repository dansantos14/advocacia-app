import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ClienteEditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cliente, setCliente] = useState({
    nome: '',
    email: '',
    cpfCnpj: '',
    telefone: '',
    endereco: ''
  });

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/clientes/${id}`)
      .then(response => setCliente(response.data))
      .catch(error => console.error('Erro ao carregar cliente:', error));
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setCliente(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`${import.meta.env.VITE_API_URL}/clientes/${id}`, cliente)
      .then(() => navigate('/clientes'))
      .catch(error => console.error('Erro ao atualizar cliente:', error));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Editar Cliente</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input type="text" name="nome" value={cliente.nome} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" value={cliente.email} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">CPF/CNPJ</label>
          <input type="text" name="cpfCnpj" value={cliente.cpfCnpj} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Telefone</label>
          <input type="text" name="telefone" value={cliente.telefone} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Endereço</label>
          <input type="text" name="endereco" value={cliente.endereco} onChange={handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default ClienteEditForm;
