const prompt = require("prompt-sync")();

let numero = Number(prompt("Quer saber a tabuada do número: "));

for (let i = 1; i < 11; i++) {
    console.log(numero," X ", i , "=", (numero * i))
}


