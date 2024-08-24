// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')();

function imc(altura, peso){
    let imc = parseFloat((peso / (altura * altura)).toFixed(2));
    if(imc < 18.5){
        console.log('IMC ' + imc + ' -> Abaixo do peso')
    }else if(imc < 25){
        console.log('IMC ' + imc + ' -> Peso adequado')
    }else if(imc < 30){
        console.log('IMC ' + imc + ' -> Sobrepeso')
    }else if(imc < 35){
        console.log('IMC ' + imc + ' -> Obesidade GRAU I')
    }else if(imc < 40){
        console.log('IMC ' + imc + ' -> Obesidade GRAU II')
    }else{
        console.log('IMC ' + imc + ' -> Obesidade EXTREMA')
    }
}

console.log('Cálculo do IMC');
let altura = Number(prompt('Digite a altura: '));
let peso = Number(prompt('Digite o peso: '));

imc(altura, peso);