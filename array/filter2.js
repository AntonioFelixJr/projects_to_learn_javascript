Array.prototype.filter2 = function(callback) {

    const resultado = []
    for (let i = 0; i < this.length; i++) {
        
        if (callback(this[i], i, this)) {
            resultado.push(this[i])
        }
    }

    return resultado
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const eCaro = produto => produto.preco >= 500
const eFragil = produto => produto.fragil

produtosCarosEFrageis = produtos.filter2(eCaro).filter2(eFragil)

console.log(produtosCarosEFrageis)

