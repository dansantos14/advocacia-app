import React, { useEffect, useState } from "react";
import axios from "axios";

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState({
    id: null,
    nome: "",
    email: "",
    cpfCnpj: "",
    telefone: "",
    endereco: ""
  });

  const buscarClientes = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/clientes`);
      setClientes(response.data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  };

  useEffect(() => {
    buscarClientes();
  }, []);

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (cliente.id) {
        await axios.put(`${import.meta.env.VITE_API_URL}/clientes/${cliente.id}`, cliente);
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/clientes`, cliente);
      }
      setCliente({ id: null, nome: "", email: "", cpfCnpj: "", telefone: "", endereco: "" });
      buscarClientes();
    } catch (error) {
      console.error("Erro ao salvar cliente:", error);
    }
  };

  const editarCliente = (c) => {
    setCliente(c);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const excluirCliente = async (id) => {
    if (!window.confirm("Deseja excluir este cliente?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/clientes/${id}`);
      buscarClientes();
    } catch (error) {
      console.error("Erro ao excluir cliente:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-body">
          <h4 className="card-title text-center mb-4">
            {cliente.id ? "Editar Cliente" : "Cadastrar Cliente"}
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Nome</label>
              <input type="text" name="nome" value={cliente.nome} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input type="email" name="email" value={cliente.email} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label>CPF/CNPJ</label>
              <input type="text" name="cpfCnpj" value={cliente.cpfCnpj} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
              <label>Telefone</label>
              <input type="text" name="telefone" value={cliente.telefone} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
              <label>Endereço</label>
              <input type="text" name="endereco" value={cliente.endereco} onChange={handleChange} className="form-control" />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                {cliente.id ? "Atualizar" : "Cadastrar"}
              </button>
              {cliente.id && (
                <button type="button" onClick={() => setCliente({ id: null, nome: "", email: "", cpfCnpj: "", telefone: "", endereco: "" })} className="btn btn-secondary">
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="mt-5">
        <h4 className="mb-3">Lista de Clientes</h4>
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>CPF/CNPJ</th>
              <th>Telefone</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((c) => (
              <tr key={c.id}>
                <td>{c.nome}</td>
                <td>{c.email}</td>
                <td>{c.cpfCnpj}</td>
                <td>{c.telefone}</td>
                <td>{c.endereco}</td>
                <td>
                  <button className="btn btn-sm btn-primary me-2" onClick={() => editarCliente(c)}>
                    Editar
                  </button>
                  <button className="btn btn-sm btn-danger" onClick={() => excluirCliente(c.id)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
            {clientes.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-muted">
                  Nenhum cliente cadastrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClienteList;
