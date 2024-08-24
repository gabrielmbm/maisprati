// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')();

function escrever(num, qtde){
    for(let counter = qtde; counter > 0; counter--){
        console.log(num)
    }
}

let num = Number(prompt('Digite o número a ser escrito: '))

escrever(num, 10)