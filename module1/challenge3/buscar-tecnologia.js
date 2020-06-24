const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

function checaSeUsuarioUsaCSS(usuario) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false

  for (tecnologia of usuario.tecnologias) {
    if (tecnologia === 'CSS') {
      return true;
    }
  }

  return false;
}

for (usuario of usuarios) {

  if (checaSeUsuarioUsaCSS(usuario)) {
    console.log(`O usuário ${usuario.nome} trabalha com CSS`);
  }
}