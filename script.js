var numberToFind = 0;
var attemps = 0;

function refresh(){
    attemps = 0;

    numberToFind = parseInt(Math.random() * 100);

    console.log('oi')
}

function verifyNumber(){
    var bet = document.getElementById('bet').value;

    if(bet > 100 || bet < 1){
        alert('Aposta inválida');
        return;
    }
    
    if(bet > numberToFind){
        attemps++;
        alert('O número para ser encontrado é MENOR.');
    }
    else if(bet < numberToFind){
        attemps++;
        alert('O número para ser encontrado é MAIOR.');
    }
    else{
        alert('Parabéns! Você acertou. Com '+attemps+' erros.');
        refresh();
    }
}
refresh();