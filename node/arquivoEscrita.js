const fs = require('fs')

const produto = {
    nome: 'PS4',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivosGerados.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})