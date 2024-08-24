// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero

const prompt = require('prompt-sync')();

function triangulo(a, b, c){
    let condicao1 = a < (b + c);
    let condicao2 = b < (a + c);
    let condicao3 = c < (a + b);
    
    if(condicao1 && condicao2 && condicao3){
        if(a === b && b === c){
            console.log('Triângulo equilátero')
        }else if(a !== b && b !== c && c !== a){
            console.log('Triângulo escaleno')
        }else{
            console.log('Triângulo isósceles')
        }
    }else{
        console.log('Não é possível formar um triângulo com os dados informados.')
    }
}

console.log('Função usada para verificação de triângulos')
let a = Number(prompt('Digite o lado a: '))
let b = Number(prompt('Digite o lado b: '))
let c = Number(prompt('Digite o lado c: '))

triangulo(a, b, c)