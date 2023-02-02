const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];
const maiorNumero = numeros.reduce((acumulador, elemento) => {
    let maior = acumulador;

    if (elemento > maior) {
        maior = elemento;
    }

    return maior;
});

console.log(maiorNumero);