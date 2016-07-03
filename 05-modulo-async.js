'use strict';
const async = require('async');
class Usuario {

    usuarios(callback) {
        setTimeout(function () {
            return callback(null, { 'nome': 'erick' });
        }, 1);
    }

    endereco(usuario, callback) {
        setTimeout(function () {
            return callback(null, { 'rua': 'dos bobos', 'nomeUsuario': usuario.nome });
        }, 1);
    }
    veiculo(callback) {
        setTimeout(function () {
            return callback(null, { 'carro': 'corsa' });
        }, 1);
    }

}

const usuario = new Usuario();
async.series([
    usuario.usuarios,
    usuario.veiculo

], (erros, resultados) => {
    console.log('usuarios', resultados[0]);
    console.log('veiculo', resultados[1]);
});

async.parallel([
    usuario.usuarios,
    usuario.veiculo
], (erros, resultados) => {
    console.log('usuarios', resultados[0]);
    console.log('veiculo', resultados[1]);
});

async.waterfall([
    usuario.usuarios,
    usuario.endereco
], (erros, resultados) => {
    console.log('resultados', resultados);
});

