alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = parseInt(prompt("Escolha o numero máximo:"));
let numeroSecreto = parseInt(Math.random() * (numeroMaximo)) +1;

let chute = parseInt(prompt(`Um número entre 1 e ${numeroMaximo}`));	
let tentativas = 1;

while (chute != numeroSecreto) {  
    if (chute == numeroSecreto) {
        break
    } else if (chute > numeroSecreto){
        alert(` número secreto é menor! `);
        chute = parseInt(prompt(`Um número entre 1 e ${numeroMaximo}`));
        tentativas++;
    } else {
        alert(`voce errou o número secreto é maior!`);
        chute = parseInt(prompt(`Um número entre 1 e ${numeroMaximo}`));
        tentativas++;
    }

}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`O número secreto era ${numeroSecreto} e você acertou com ${tentativas} ${palavraTentativa}`);
