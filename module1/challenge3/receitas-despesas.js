const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

function somaNumeros(numeros) {
  // Soma todos números dentro do array "numeros"
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  return soma;
}

function calculaSaldo(receitas, despesas) {
  return somaNumeros(receitas) - somaNumeros(despesas);
}

for (usuario of usuarios) {
  let saldo = calculaSaldo(usuario.receitas, usuario.despesas);
  let msg;
  if (saldo >= 0) {
    msg = 'POSITIVO';
  } else {
    msg = 'NEGATIVO';
  }

  console.log(`${usuario.nome} possui saldo ${msg} de ${saldo.toFixed(2)}`)
}
