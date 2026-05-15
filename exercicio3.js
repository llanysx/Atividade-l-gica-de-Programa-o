const prompt = require("prompt-sync")();

let nota  = Number(prompt("Informe sua nota: "));

if (nota > 7){
    console.log ("Você passou, parabéns!");
} else if(nota < 7){
    console.log ("Infelizmente você foi reprovado") 
} else {
    console.log("Ok, você está na média")
}