/**************************
 * SELECIONANDO ELEMENTOS
 * *************************
 */

//seleciona o elemento apartir do elemento ID
//console.log(document.getElementById('nome_usuario'));

//seleciona os elementos apartir do nome da tag (mais de um)
//console.log(document.getElementsByTagName('input'));

//seleciona os elementos apartir do nome da classe (mais de um)
//console.log(document.getElementsByClassName('campo_text'));

//seleciona os elementos apartir do nome (mais de um)
//console.log(document.getElementsByName('nome'));


/**************************
 * MANIPULANDO VALORES DE INPUTS
 * *************************
 */

function distribuirCaracter(){
    //selecinar o valor digitado
    var caracter = document.getElementById('entrada').value;
    //limpar o campo de digitação
    document.getElementById('entrada').value = '';

    //limpar espaços em branco nas estremidades da string
    caracter.trim();

    switch(caracter) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            //adicionar o caracter no campo referente a números
            document.getElementById('numeros').value = caracter;
            break;
        default:
            //adiciona o caracter no campo referente a letras        
            document.getElementById('letras').value = caracter;
    }
}

/**************************
 * MANIPULANDO ESTILOS DE ELEMENTOS
 * *************************
 */

function modificaEstilo(corFundo, largura, altura, radius){
    document.getElementById('caixa').style.backgroundColor = corFundo;
    document.getElementById('caixa').style.width = largura;
    document.getElementById('caixa').style.height = altura;
    document.getElementById('caixa').style.borderRadius = radius;
}

/**************************
 * MANIPULANDO CLASSES DE ELEMENTOS
 * *************************
 */
function modificaClasse(){
    document.getElementById('menssagem').className = 'estilo2';
}