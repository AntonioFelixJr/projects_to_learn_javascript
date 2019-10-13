// coleçao dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 100000,
    proprietario: {
        nome: 'Vitória Felix',
        idade: 19,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [
        {
            nome: 'Antonio Felix',
            idade: 22
        },
        {
            nome: 'Mateus André',
            idade: 4
        }
    ],
    calcularValorSeguro: function(){

    }
}

carro.proprietario.endereco.numero = 200
carro['proprietario']['endereco']['logradouro'] = 'Rua Ângelo Pedroso'

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)

