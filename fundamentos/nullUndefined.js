let valor //não inicializada

console.log(valor)

valor = null
console.log(valor)
//console.log(valor.toString()) // Erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 4.50

console.log(produto)

produto.preco = undefined // Evite atrubuir undefined

console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preco

console.log(!! produto.preco)
console.log(produto)


