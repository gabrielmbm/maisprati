// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

function menu(){
    console.log('Digite 1 para MENU 1');
    console.log('Digite 2 para MENU 2');
    console.log('Digite 3 para MENU 3');
    console.log('')
    let option = Number(prompt('Digite o menu desejado: '))
    switch(option){
        case 1:
            console.log('Menu 1');
            break;
        case 2:
            console.log('Menu 2');
            break;
        case 3:
            console.log('Menu 3');
            break;
        default:
            console.log('Menu inválido');
            
    }
};

menu()