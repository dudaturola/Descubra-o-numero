alert('Boas vindas ao jogo do Número Secreto!');
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');
//
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}` );
} else {
    alert ('Voce errou! tente novamente');
}