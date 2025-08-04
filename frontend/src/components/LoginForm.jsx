import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);

  const navigate = useNavigate();

  // Detecta o ambiente e define a URL da API
  const API_BASE_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:8080"
      : "https://www.daniloaugustosantos.com.br";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");

    try {
      const response = await axios.post(`${API_BASE_URL}/api/usuarios/login`, {
        login,
        senha,
      });

      setUsuarioAutenticado(response.data);
      alert("Login realizado com sucesso!");
      navigate("/home");
    } catch (err) {
      console.error("Erro ao realizar login:", err);
      setErro("Login ou senha inválidos.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Login</h3>
        {erro && <div className="alert alert-danger">{erro}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="login" className="form-label">Login</label>
            <input
              type="text"
              className="form-control"
              id="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="senha" className="form-label">Senha</label>
            <input
              type="password"
              className="form-control"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

