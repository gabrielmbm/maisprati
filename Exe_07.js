// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

function macasCompradas(x) {
    let precoFinal = 0
    let preco = 0.25

    if(x < 12){
        preco = 0.30
    }
    
    precoFinal = parseFloat((preco * x).toFixed(2))
    console.log('R$' + precoFinal)
}

let x = Number(prompt('Digite o número de maçãs compradas: '))

macasCompradas(x)