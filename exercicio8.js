const prompt = require("prompt-sync")();

let nomes = [];

nomes.push(prompt("Digite um nome: "));
nomes.push(prompt("Digite outro nome: "));
nomes.push(prompt("Digite mais um nome: "));

console.log(nomes);