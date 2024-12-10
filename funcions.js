function esparell(){
    // Llegim el que han introduit a les variables
    var a = document.getElementById('numero1').value;
    //Passam el text d'a a números (Integer - enter)
    a = parseInt(a);

    if (a%2==0){
        document.getElementById('resposta1Verda').hidden = false;
        document.getElementById('resposta1Vermella').hidden = true;

    }else{
        document.getElementById('resposta1Vermella').hidden = false;
        document.getElementById('resposta1Verda').hidden = true;
    }

}