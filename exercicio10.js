const prompt = require("prompt-sync")();

let usuario = prompt("Usuário: ");
let senha = prompt("Senha: ");

if (usuario == "admin" && senha == "1234") {
    console.log("Login correto");
} else {
    console.log("Login incorreto");
}