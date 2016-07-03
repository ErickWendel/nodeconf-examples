"use strict";

function funcaoSemSincronia(valor) {
    setTimeout(function() {
        return valor * 2;
    }, 1);
}

const resultado = funcaoSemSincronia(2);
console.log('resultado sem sincronia', resultado);

function funcaoSincronizada(valor, callback) {
    setTimeout(function() {
        return callback(null, valor * 2);
    }, 1);
}

funcaoSincronizada(2, (erro, resultado) => {
    console.log('resultadoCalculo', resultado);
});