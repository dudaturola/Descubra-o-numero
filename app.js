alert('Boas vindas ao jogo do Número Secreto!');
let numeroSecreto = 4;
let chute = prompt('Escolha um número entre 1 e 10');
console.log('Valor do chute:', chute);
console.log('Resultado da comparacao', chute == numeroSecreto);
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}` );
} else {
    alert ('Voce errou! tente novamente');
    console.log('Valor do numero secreto:', numeroSecreto);
};