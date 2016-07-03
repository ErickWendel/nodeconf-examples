function usuario() {
    return new Promise((resolve, reject) => {
        return resolve({ 'idUsuario': '213', 'nome': 'erick' });
    });
}

function endereco(usuario) {
    return new Promise((resolve, reject) => {
        return resolve({ 'idUsuario': usuario.idUsuario, 'rua': 'dos bobos' });
    });
}
function outros() {
    return new Promise((resolve, reject) => {
        return resolve({ 'transporte': 'onibus' });
    });
}

usuario()
    .then(endereco)
    .then((resultados) => {
        console.log('sucessoEndereco', resultados);
    }, (erros) => {
        console.log('erros', erros);
    });

//// funcoes que nao dependem dos resultados da outra
Promise.all([
    usuario(),
    outros()
]).then((resultados) => {
    console.log('resultados', resultados);
})

