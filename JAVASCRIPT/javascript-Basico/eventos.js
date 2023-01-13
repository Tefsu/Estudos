/*
* ************** Eventos do mouse ******************
*/
function mouseClick() {
    alert('Evento ativado ao clicar na area do evento');
}

function mouseDoubleClick() {
    alert('Evento ativado ao dar um double click na area do evento');
}

function mouseOver() {
    alert('Evento ativado ao sobrepor a area do evento');
}

function mouseOut() {
    alert('Evento ativado ao retirar o mouse da area do evento');
}

/*
* ************** Eventos do teclado ******************
*/

function onKeyDown(){
    alert('A função é acionada antes do caracter ser inserido');
}

function onKeyUp(){
    alert('A função é acionada depois do caracter ser inserido');
}

function onKeyPess(){
    alert('A função é acionada entre o onkeydown e o onkeypress, a difereça é que o onkeypress so é acionado caso a tecla pressionada represente um caracter (letra, numero, espaço, etc)');
}

/*
* ************** Eventos na janela ******************
*/

function onResize(){
    console.log('Ao mudar o tamanho da janela, a função é executada');
}

function onScroll(){
    console.log('Ao rolar o scroll do mouse, a função é executada');
}

/*
* ************** Eventos em formularios ******************
*/

function onFocus(){
    console.log('A ação é executada quando o elemento recebe o foco');
}

function onBluer(){
    console.log('A ação é executada quando o elemento perde o foco');
}

function onChange(){
    console.log('O estado do elemento foi modificado');
}