// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')();

function parOuImpar(x) {
    if (x == 0) {
        console.log("Zero")
    }else if ((x % 2) == 0){
        console.log("Par")
    }else{
        console.log("Ímpar")
    };
};

let x = Number(prompt('Digite um número: '));

parOuImpar(x);