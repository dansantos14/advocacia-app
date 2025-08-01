import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FaturamentoForm from './FaturamentoForm';

const FaturamentoList = () => {
  const [faturamentos, setFaturamentos] = useState([]);

  const fetchFaturamentos = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/faturamentos`);
    setFaturamentos(response.data);
  };

  useEffect(() => {
    fetchFaturamentos();
  }, []);

  const handleSubmit = async (novoFaturamento) => {
    await axios.post(`${import.meta.env.VITE_API_URL}/faturamentos`, novoFaturamento);
    fetchFaturamentos();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <h2 className="text-center mb-4">Faturamentos</h2>
        <FaturamentoForm onSubmit={handleSubmit} />
        <ul className="list-group mt-4">
          {faturamentos.map((f) => (
            <li key={f.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <strong>Valor:</strong> R$ {f.valor} - <strong>Descrição:</strong> {f.descricao}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FaturamentoList;

