import React from 'react';

function FormProcesso() {
  return (
    <div>
      <h2>Novo Processo</h2>
      <form>
        <input type="text" placeholder="Descrição" /><br />
        <input type="number" placeholder="ID do Cliente" /><br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default FormProcesso;
