// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números

const prompt = require('prompt-sync')();

function media(){
    let num = Number(prompt('Digite o primeiro número: '))
    let counter = 0
    let sum = 0

    while(num !== 0){
        sum += num
        counter++
        num = Number(prompt('Digite o próximo número: '))
    }

    let media = sum / counter
    console.log('A média aritmética é ' + media)
}

media()