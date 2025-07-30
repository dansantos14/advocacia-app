// src/components/ProcessoList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProcessoList = ({ onEdit }) => {
  const [processos, setProcessos] = useState([]);

  const fetchProcessos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/processos');
      setProcessos(response.data);
    } catch (error) {
      console.error('Erro ao buscar processos:', error);
    }
  };

  const handleDelete = async (numeroProcesso) => {
    try {
      await axios.delete(`http://localhost:8080/processos/${numeroProcesso}`);
      fetchProcessos();
    } catch (error) {
      console.error('Erro ao excluir processo:', error);
    }
  };

  useEffect(() => {
    fetchProcessos();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Lista de Processos</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Número</th>
            <th>Tipo</th>
            <th>Estágio</th>
            <th>Data de Entrada</th>
            <th>Cliente</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {processos.map((processo) => (
            <tr key={processo.numeroProcesso}>
              <td>{processo.numeroProcesso}</td>
              <td>{processo.tipo}</td>
              <td>{processo.estagio}</td>
              <td>{processo.dataEntrada}</td>
              <td>{processo.cliente?.nome || '-'}</td>
              <td>
                <button className="btn btn-sm btn-primary me-2" onClick={() => onEdit(processo)}>Editar</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(processo.numeroProcesso)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProcessoList;



