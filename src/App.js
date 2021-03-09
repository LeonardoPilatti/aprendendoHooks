import React from 'react';

// function App() {
//   let ativo = true;
//   // esse disabled é para desabilitar o botão caso ele esteja diferente de true, no caso !ativo significa diferente
//   // return <button disabled={!ativo}>{ativo ? 'Ativo' : 'Inativo'}</button>;

//   function handleClick() {
//     ativo = !ativo; /// aqui ele me retorna falso ou true, pois o '!' faz ficar diferente, ou seja, valor contrário do que ele é;
//     console.log(ativo);
//   }

//   return <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>;
// }

/// React.useState(false, function)
function App() {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Leonardo', idade: '21' });

  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Possui faculdade' });
  }

  function handleClick2() {
    setContar(contar + 1);
    setItems([...items, 'Item ' + (contar + 1)]);
  }

  // function handleClick2() {
  //   setContar((contar) => {
  //     return contar + 1;
  //   });
  //   setItems((items) => [...items, 'Item ' + (contar + 1)]);
  // }

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
      <p>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </p>
      <button onClick={handleClick2}>{contar}</button>
    </div>
  );
}

export default App;
