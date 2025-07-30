import React, { useState } from "react";

function FormFaturamento() {
  const [dados, setDados] = useState({
    cliente: "",
    valor: "",
    data: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dados);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card shadow p-4 w-100" style={{ maxWidth: "500px" }}>
        <h4 className="mb-4 text-center">Cadastro de Faturamento</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Cliente</label>
            <input type="text" className="form-control" name="cliente" value={dados.cliente} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Valor</label>
            <input type="number" className="form-control" name="valor" value={dados.valor} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Data</label>
            <input type="date" className="form-control" name="data" value={dados.data} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default FormFaturamento;
