import React, { useState } from "react";
import axios from "axios";

const ClienteForm = ({ onClienteCadastrado }) => {
  const [cliente, setCliente] = useState({
    nome: "",
    email: "",
    cpfCnpj: "",
    telefone: "",
    endereco: ""
  });

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/clientes`, cliente);
      alert("Cliente cadastrado com sucesso!");
      setCliente({
        nome: "",
        email: "",
        cpfCnpj: "",
        telefone: "",
        endereco: ""
      });

      if (onClienteCadastrado) onClienteCadastrado();
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
      alert("Erro ao cadastrar cliente");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow-sm p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <h3 className="text-center mb-4">Cadastro de Cliente</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input type="text" className="form-control" name="nome" value={cliente.nome} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" value={cliente.email} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">CPF/CNPJ</label>
            <input type="text" className="form-control" name="cpfCnpj" value={cliente.cpfCnpj} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Telefone</label>
            <input type="text" className="form-control" name="telefone" value={cliente.telefone} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Endereço</label>
            <input type="text" className="form-control" name="endereco" value={cliente.endereco} onChange={handleChange} />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClienteForm;
