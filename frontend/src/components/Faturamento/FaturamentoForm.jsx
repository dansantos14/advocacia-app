import React, { useState } from 'react';

const FaturamentoForm = ({ onSubmit }) => {
  const [faturamento, setFaturamento] = useState({
    valor: '',
    descricao: '',
  });

  const handleChange = (e) => {
    setFaturamento({
      ...faturamento,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(faturamento);
    setFaturamento({ valor: '', descricao: '' });
  };

  return (
    // Adicionado card, preenchimento e sombra para consistência
    <div className="card p-4 shadow mb-4">
      <form onSubmit={handleSubmit}>
        {/* Adicionado espaçamento inferior */}
        <div className="mb-3">
          <label htmlFor="valor" className="form-label">Valor:</label>
          <input
            type="number"
            // Adicionada classe de controle de formulário
            className="form-control"
            id="valor"
            name="valor"
            value={faturamento.valor}
            onChange={handleChange}
            required
          />
        </div>
        {/* Adicionado espaçamento inferior */}
        <div className="mb-3">
          <label htmlFor="descricao" className="form-label">Descrição:</label>
          <input
            type="text"
            // Adicionada classe de controle de formulário
            className="form-control"
            id="descricao"
            name="descricao"
            value={faturamento.descricao}
            onChange={handleChange}
            required
          />
        </div>
        {/* Adicionado container para o botão preencher o card */}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FaturamentoForm;
