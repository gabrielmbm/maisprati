// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require('prompt-sync')();

function tabuada(num, qtde){
    let mult = 1
    for(counter = 1; counter <= qtde; counter++){
        mult = num * counter
        console.log(num + ' * ' + counter + ' = ' + mult)
    }
}

let num = Number(prompt('Digite o número a ser multiplicado: '))
tabuada(num, 10)