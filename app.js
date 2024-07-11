alert('Boas vindas ao jogo do Número Secreto!');
let maximo = 100;
let numeroSecreto = parseInt(Math.random()* maximo+1 );
let chute;
let tentativas = 1;

console.log('Valor do chute:', chute);
console.log('Resultado da comparacao', chute == numeroSecreto);
// enquanto o chute nao for igual ao numero secreto


while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${maximo}`);
    if (chute == numeroSecreto) {
        break;
        
    } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

/*
if (tentativas > 1) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.` );
}else{
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.` );
}*/