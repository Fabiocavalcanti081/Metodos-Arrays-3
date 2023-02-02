const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro"
];
const maiorString = cidades.reduce((acumulador, elemento) => {
    let maior = acumulador;

    if (elemento.length > maior.length) {
        maior = elemento;
    }

    return maior;
});

console.log(maiorString);