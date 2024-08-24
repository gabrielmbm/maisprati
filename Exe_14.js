// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')();

function fatorial(num){
    let fatorial = 1
    for(let counter = num; counter > 0; counter--){
        fatorial *= counter
    }
    console.log(fatorial)
}

let num = Number(prompt('Digite o número a ser calculado o fatorial: '))

fatorial(num)