function mascara(numero){ 
    
    if(numero.value.length == 0)
        numero.value = '(' + numero.value;

    if(numero.value.length == 3)
        numero.value = numero.value + ') ';

    if(numero.value.length == 10)
        numero.value = numero.value + '-';

}

function chamar() {

    let numero = document.querySelector('#numero').value
    let cel = document.querySelector('#cel')

    numero = numero.replace(/\D/g, '');

    if(numero.length < 11) {
         alert("Número Inválido");
            window.location.reload();

    }

    else{

    cel.setAttribute('href', 'https://api.whatsapp.com/send?phone=55' + numero)

    }


}



