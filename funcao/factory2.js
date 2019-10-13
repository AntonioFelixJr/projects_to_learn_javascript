// factory

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.10
    }
}

console.log(criarProduto('Panela', 125.99))
console.log(criarProduto('Cama', 999.99))
console.log(criarProduto('Sofá', 725.99))
