import React from 'react';

function ListarUsuarios() {
  return (
    <div>
      <h2>Usuários</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Login</th>
          </tr>
        </thead>
        <tbody>
          {/* Conteúdo dinâmico */}
        </tbody>
      </table>
    </div>
  );
}

export default ListarUsuarios;