function focado(){
    document.getElementById('campo').style.background = 'yellow';
}

function validando(){
    var valorCampo = document.getElementById('campo').value;

    if(valorCampo.length < 6){
        document.getElementById('campo').style.background = '#ff0000';
    } else {
        document.getElementById('campo').style.background = '#00ff00';
    }
}