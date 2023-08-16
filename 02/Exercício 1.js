//Exercício 1
const usuario = {
    nome: "João",
    idade: 25,
    profissao: "programador",
    cor_preferida: "verde",
};

const { nome, idade, profissao, cor_preferida } = usuario;

const mensagem = `Olá... Eu sou ${nome} e tenho ${idade} anos de idade. Sou ${profissao} e minha cor preferida é ${cor_preferida}!`;

console.log(mensagem);
