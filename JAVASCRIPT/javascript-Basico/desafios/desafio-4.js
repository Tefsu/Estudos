var num1 = prompt('insira o primeiro número');
var operacao = prompt('insira a operação ("soma" ou "substracao")');
var num2 = prompt('Insira o segundo número');

var calcular = calculo(num1, num2, operacao);

document.write('O resultado é: ' + calcular);

function calculo(num1, num2, operacao) {
    var resultado = 0;
    
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch(operacao){
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        default:
            document.write('Operação invalida');
    }

    return resultado;
}