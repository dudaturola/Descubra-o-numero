alert('Boas vindas ao jogo do Número Secreto!');
let numeroSecreto = 5;
let chute
console.log('Valor do chute:', chute);
console.log('Resultado da comparacao', chute == numeroSecreto);
// enquanto o chute nao for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}` );
    } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
    }
}

