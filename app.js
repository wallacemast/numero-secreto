alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = parseInt(Math.random() * 11);
console.log(numeroSecreto); 

let chute = parseInt(prompt("Um número entre 1 e 10"));
let tentativas = 1;

while (chute != numeroSecreto) {  
    if (chute == numeroSecreto) {
        break
    } else if (chute > numeroSecreto){
        alert(` número secreto é menor! `);
        chute = parseInt(prompt("Um número entre 1 e 10"));
        tentativas++;
    } else {
        alert(`voce errou o número secreto é maior!`);
        chute = parseInt(prompt("Um número entre 1 e 10"));
        tentativas++;
    }

}

if (tentativas == 1) {
    alert(`O número secreto era ${numeroSecreto} e você acertou com apenas 1 tentativa`);
} else {
    alert(`O número secreto era ${numeroSecreto} e você acertou com ${tentativas} tentativas`);
}
