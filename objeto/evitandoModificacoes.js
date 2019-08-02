// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Sapato', preco: 1.99, tag: 'Promoção' 
})

console.log('Extensível:', Object.isExtensible(produto))

console.log(produto)
produto.nome = 'Borracha'
console.log(produto)
produto.descricao = 'Borracha escola branca'
console.log(produto)
delete produto.tag
console.log(produto)

// Object.seal

const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)

console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 24
console.log(pessoa)

// Object.freeze = selado + valores constantes