// 11. Escreva um programa que solicita ao usuário
// 5 números e calcula a soma total
// utilizando um loop for

const prompt = require('prompt-sync')();

function somaTotal(qtde){
    let somaTotal = 0
    let num = 0
    for (let counter = qtde; counter > 0; counter--){
        num = Number(prompt('Digite o valor: '))
        somaTotal = somaTotal + num
    }
    console.log(somaTotal)
}

somaTotal(5)