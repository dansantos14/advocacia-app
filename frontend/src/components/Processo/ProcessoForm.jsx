import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProcessoForm = () => {
  const [processo, setProcesso] = useState({
    numeroProcesso: '',
    tipo: '',
    estagio: '',
    dataEntrada: '',
    cliente: null
  });

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/clientes`)
      .then(response => setClientes(response.data))
      .catch(error => console.error('Erro ao buscar clientes:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProcesso(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...processo,
      cliente: { id: processo.cliente }
    };

    axios.post(`${import.meta.env.VITE_API_URL}/processos`, payload)
      .then(() => {
        alert('Processo cadastrado com sucesso!');
        setProcesso({
          numeroProcesso: '',
          tipo: '',
          estagio: '',
          dataEntrada: '',
          cliente: null
        });
      })
      .catch(error => {
        console.error('Erro ao cadastrar processo:', error);
        alert('Erro ao cadastrar processo');
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '600px' }}>
        <h4 className="mb-4 text-center">Cadastrar Processo</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Número do Processo</label>
            <input type="text" className="form-control" name="numeroProcesso" value={processo.numeroProcesso} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Tipo</label>
            <input type="text" className="form-control" name="tipo" value={processo.tipo} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Estágio</label>
            <input type="text" className="form-control" name="estagio" value={processo.estagio} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Data de Entrada</label>
            <input type="date" className="form-control" name="dataEntrada" value={processo.dataEntrada} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Cliente</label>
            <select className="form-select" name="cliente" value={processo.cliente || ''} onChange={handleChange} required>
              <option value="">Selecione um cliente</option>
              {clientes.map(cliente => (
                <option key={cliente.id} value={cliente.id}>
                  {cliente.nome}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default ProcessoForm;
