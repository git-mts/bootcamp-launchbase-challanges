// Definindo variáveis
const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

// Calculo para a regra 85-95
const aux = idade + contribuicao;
 
if ((sexo === 'M' && contribuicao >= 35) || (sexo === 'F' && contribuicao >= 30)) {
  // Se o usuário tiver acima da tempo mínimo de contribuição.  
  if ((sexo === 'M' && aux >= 95) || (sexo === 'F' && aux >= 85)) {
    // pode recerber a aposentadoria.
    console.log(`${nome}, você pode se aposentar!`);
  } else {
    // não pode receber a aposentadoria.
    console.log(`${nome}, você ainda não pode se aposentar!`);
  }

} else {
  // Senão estiver acima do tempo mínimo de contribuição
  console.log(`${nome}, você ainda não pode se aposentar!`);
}
