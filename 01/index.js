// a) Ordem Crescente
const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
numeros.sort((a, b) => {
    return a - b;
});
console.log(numeros);

// b) Ordem Decrescente
numeros.sort((a, b) => {
    return b - a;
});
console.log(numeros);

// c)  Ordem Crescente, com base nos valores dos pontos de código Unicode 
numeros.sort();
console.log(numeros);

// d) Ordem Alfabética
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
frutas.sort((a, b) => {
    return a.localeCompare(b);
});
console.log(frutas);

// e) Ordem Alfabética Decrescente
frutas.sort((a, b) => {
    return b.localeCompare(a);
});
console.log(frutas);

// f) Ordem Crescente, de acordo com a quantidade de caracters
frutas.sort((a, b) => {
    if (a.length < b.length) {
        return -1;
    } else if (a.length > b.length) {
        return 1;
    }
});
console.log(frutas);