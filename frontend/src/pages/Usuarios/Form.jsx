import React from 'react';

function FormUsuario() {
  return (
    <div>
      <h2>Novo Usuário</h2>
      <form>
        <input type="text" placeholder="Login" /><br />
        <input type="password" placeholder="Senha" /><br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default FormUsuario;