'use strict';
const promise = require('bluebird');
class Usuario {

    usuarios(callback) {
        setTimeout(function () {
            return callback(null, [{ 'nome': 'erick' }, { 'nome': 'jose' }]);
        }, 1);
    }
    
    endereco(nomeUsuario, callback) {
        setTimeout(function () {
            return callback(null, { 'rua': 'dos bobos', 'nomeUsuario': nomeUsuario });
        }, 1);
    }

}

////
const usuario = promise.promisifyAll(new Usuario());
console.log('usuario', usuario);
usuario.usuariosAsync()
    .then((success) => {
        let nomeUsuario = success[0].nome;
        usuario.enderecoAsync(nomeUsuario)
            .then(enderecoSuccess => {
                console.log('enderecoSuccess', enderecoSuccess);
            });
    });

const getUsuarios = promise.promisify(new Usuario().usuarios);
getUsuarios()
    .then((resultados) => {
        console.log('resultados', resultados);
    })