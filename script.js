function Mostrar(){

    let numero = document.getElementById("numero").value;

    numero = parseInt(numero);

    if(numero=="1"){
        document.getElementById("mes").value = "Janeiro";
    } 
    else if(numero=="2"){
        document.getElementById("mes").value = "Fevereiro"
    }   
    else if(numero=="3"){
        document.getElementById("mes").value = "Março"
    }
    else if(numero=="4"){
        document.getElementById("mes").value = "Abril"
    }
    else if(numero=="5"){
        document.getElementById("mes").value = "Maio"
    }
    else if(numero=="6"){
        document.getElementById("mes").value = "Junho"
    }
    else if(numero=="7"){
        document.getElementById("mes").value = "Julho"
    }
    else if(numero=="8"){
        document.getElementById("mes").value = "Agosto"
    }
    else if(numero=="9"){
        document.getElementById("mes").value = "Setembro"
    }
    else if(numero=="10"){
        document.getElementById("mes").value = "Outubro"
    }
    else if(numero=="11"){
        document.getElementById("mes").value = "Novembro"
    }
    else if(numero=="12"){
        document.getElementById("mes").value = "Dezembro"
    }
    else{
        document.getElementById("mes").value = "Digite um valor valido!"
    }
}

function Limpar(){
    document.getElementById("numero").focus();
}

mes.disabled = true;