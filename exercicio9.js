let numeros = [10, 25, 7, 99, 43];

let maior = 0;

for (let numero of numeros) {
    if (numero > maior) {
        maior = numero;
    }
}

console.log(maior);