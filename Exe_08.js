// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

function ordenacao(x, y){
    if(x > y){
        console.log(y + ', ' + x)
    }else{
        console.log(x + ', ' + y)
    }
}

let x = Number(prompt('Digite o primeiro valor: '))
let y = Number(prompt('Digite o segundo valor: '))

ordenacao(x, y)