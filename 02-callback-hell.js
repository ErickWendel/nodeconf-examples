function usuario(callback) {
    setTimeout(function () {
        return callback(null, { 'idUsuario': '1123231', 'nome': 'erick wendel' });
    }, 1);
}

function endereco(idUsuario, callback) {
    setTimeout(function () {
        return callback(null, { 'rua': 'dos bobos', 'numero': 3 });
    }, 1);
}
function cep(idEndereco, callback) {

    setTimeout(function () {
        return callback(null, { 'cep': '00022' });
    }, 1);
}
function veiculos(idUsuario, callback) {
    setTimeout(function () {
        return callback(null, { 'carro': 'corsa' });
    }, 1);
}

//// execucao
usuario((erroUsuario, sucessoUsuario) => {
    endereco(sucessoUsuario.idUsuario, (erroEndereco, sucessoEndereco) => {
        cep(sucessoEndereco.idEndereco, (erroCep, sucessoCep) => {
            veiculos(sucessoUsuario.idUsuario, (erroVeiculo, sucessoVeiculo) => {
                console.log('usuario', sucessoUsuario);
                console.log('endereco', sucessoEndereco);
                console.log('cep', sucessoCep);
                console.log('veiculo', sucessoVeiculo);
            });
        });
    });


});

