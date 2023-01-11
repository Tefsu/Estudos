var idade = prompt('Digite sua idade: ');

idade = parseInt(idade);

document.write('<h1>De acordo com sua idade, você é...</h1>');

if(idade >= 0 && idade < 15){
    document.write('Criança');
}else if(idade >= 15 && idade < 30){
    document.write('Jovem');
}else if(idade >= 30 && idade < 60){
    document.write('Adulto');
}else if(idade >= 60){
    document.write('Idoso');
};