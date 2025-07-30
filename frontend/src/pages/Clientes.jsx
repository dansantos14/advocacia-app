import React, { useState, useEffect } from 'react';
import { getClientes, createCliente, updateCliente, deleteCliente } from '../services/clienteService';
import ClienteForm from '../components/Cliente/ClienteForm';
import ClienteList from '../components/Cliente/ClienteList';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [clienteEditando, setClienteEditando] = useState(null);

  const carregarClientes = async () => {
    const response = await getClientes();
    setClientes(response.data);
  };

  useEffect(() => {
    carregarClientes();
  }, []);

  const salvarCliente = async (cliente) => {
    if (cliente.id) {
      await updateCliente(cliente.id, cliente);
    } else {
      await createCliente(cliente);
    }
    setClienteEditando(null);
    carregarClientes();
  };

  const editarCliente = (cliente) => {
    setClienteEditando(cliente);
  };

  const excluirCliente = async (id) => {
    await deleteCliente(id);
    carregarClientes();
  };

  return (
    <div>
      <h1>Clientes</h1>
      <ClienteForm onSubmit={salvarCliente} initialData={clienteEditando} />
      <ClienteList clientes={clientes} onEdit={editarCliente} onDelete={excluirCliente} />
    </div>
  );
};

export default Clientes;
