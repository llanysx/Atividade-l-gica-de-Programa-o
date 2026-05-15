const prompt = require("prompt-sync")();

let nomes = []; //cria um array vazio chamado nomes

for(let i = 0; i < 10; i++){
    let nome = prompt("Digite um nome: ");
    //pede para o usuario digitar um nome
    nomes.push(nome);
    //salva o nome no vetor nomes através da função push
}

console.log("Nomes cadastrados: ");
//percorre o array de nomes posição por posição
for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]); 
    //exibe cadad nome armazenado
}