const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const eCaro = produto => produto.preco >= 500
const eFragil = produto => produto.fragil

produtosCarosEFrageis = produtos.filter(eCaro).filter(eFragil)

console.log(produtosCarosEFrageis)

// console.log(produtos.filter(function(p){
//     return eCaro(p.preco) && eFragil(p.fragil)
// }))