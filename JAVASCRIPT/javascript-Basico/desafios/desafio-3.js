var nome = prompt('Informe seu nome: ');
var altura = prompt('Informe sua altura(centimetros): ');
var peso = prompt('Informe seu peso(quilos): ');
var classificacao = '';

altura = parseFloat(altura);
peso = parseFloat(peso);

altura = altura / 100;

var m = peso / (altura * altura);

if(m<=15.99){
    classificacao = 'Baixo peso muito grave.';
} else if(m>= 16.00 && m<=16.99){
    classificacao = 'Baixo peso grave.';
} else if(m>= 17.00 && m<=18.49){
    classificacao = 'Peso grave.';
} else if(m>= 18.50 && m<=24.99){
    classificacao = 'Peso normal.';
} else if(m>= 25.00 && m<=29.99){
    classificacao = 'Sobrepeso.';
} else if(m>= 30.00 && m<=34.99){
    classificacao = 'Obesidade grau I';
} else if(m>= 35.00 && m<=39.99){
    classificacao = 'Obesidade grau II';
} else if(m>= 40.00){
    classificacao = 'Obesidade grau III';
} 

document.write(nome + ' possui índice de masa corporal igual a '+ m + ', sendo classificado como: ' + classificacao);