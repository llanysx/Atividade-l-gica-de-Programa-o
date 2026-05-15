const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "))

if (numero < 0) {
    console.log("Número negativo");
} else if (numero > 0) {
    console.log("Número positivo");
} else {
    console.log("Número é Zero");
}