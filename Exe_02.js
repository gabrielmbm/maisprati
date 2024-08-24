// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else

const prompt = require('prompt-sync')();

function verificaIdade(idade) {
    if (idade < 0) {
        console.log('Idade inválida')
    }else if (idade < 12) {
        console.log('Criança')
    }else if (idade < 18) {
        console.log('Adolescente')
    }else if (idade < 65) {
        console.log('Adulto')
    }else{
        console.log('Idoso')
    }
};

let idade = prompt('Digite a idade: ');

verificaIdade(idade);