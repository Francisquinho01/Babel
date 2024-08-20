
const alunos = [
    { nome: 'Camile', nota: 8 },
    { nome: 'Priscila', nota: 5 },
    { nome: 'Eduardo', nota: 7 },
    { nome: 'Alberto', nota: 6 },
    { nome: 'Pedro', nota: 4 },
  ];
  

  function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
  }
  

  const aprovados = filtrarAprovados(alunos);
  console.log(aprovados);
  