// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for

function fibonacci(x){
    let antAnt = 1
    let ant = 1
    let atual = antAnt + ant
    console.log(antAnt)
    console.log(ant)
    for(let counter = 2; counter < x; counter++){
        console.log(atual)
        antAnt = ant
        ant = atual
        atual = ant + antAnt
        
    }
}

fibonacci(10)