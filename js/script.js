const formulario = document.getElementById('formulario');

document.getElementById('inputBtn').addEventListener('click', function() {
    const dataUser = document.getElementById('dataUser');
    const dataPass = document.getElementById('dataPass');
    if (validarData(dataUser, dataPass)) {
        location.replace("home-page.html");
    } else {
        alert('Usuario o password incorrecto. Recuerda que el usuario deben ser unicamente numeros y la contrasena requiere como minimo, 4 caracteres');
    }
});

function validarData(dataUser, dataPass) {
    var esValido = false;
    if (validarUser(dataUser) && validarPass(dataPass)) {
        esValido = true;
    }
    return esValido;
}

function validarUser(dataUser) {
    var result = false;
    if (!tiene_letras(dataUser.value) && tiene_solo_numeros(dataUser.value)) {
        result = true;
    }
    return result;
}

function validarPass(dataPass) {
    var result = false;
    if (dataPass.value.length >= 4) {
        result = true;
    }
    return result;
}

function tiene_solo_numeros(texto) {
    var numeros = "0123456789";
    var resultado = 0;
    for (i = 0; i < texto.length; i++) {
        if (numeros.indexOf(texto.charAt(i), 0) != -1) {
            resultado = 1;
        } else {
            resultado = 0;
        }
    }
    return resultado;
}

function tiene_letras(texto) {
    var letras = "abcdefghyjklmnñopqrstuvwxyz";
    texto = texto.toLowerCase();
    for (i = 0; i < texto.length; i++) {
        if (letras.indexOf(texto.charAt(i), 0) != -1) {
            return 1;
        }
    }
    return 0;
}
