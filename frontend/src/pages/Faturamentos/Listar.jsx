import React from 'react';

function ListarFaturamentos() {
  return (
    <div>
      <h2>Faturamentos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {/* Conteúdo dinâmico */}
        </tbody>
      </table>
    </div>
  );
}

export default ListarFaturamentos;