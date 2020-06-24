// Definindo Variáveis
const nome = "Carlos";
const peso = 84;
const altura = 1.88;

// Calculando IMC
const imc = peso / (altura**2);

// verificando o valor da variável imc.
if (imc >= 30) {
  // Se o usuário estiver acima do peso.
  console.log(`${nome} você está acima do peso.`);
} else {
  // se o usuário não estiver acima do peso.
  console.log(`${nome} você não está acima do peso.`)
}
