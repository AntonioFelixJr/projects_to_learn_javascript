const notas = [5.2, 10, 2.8, 9,3, 8.9]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Vitória',
    sobrenome: 'Felix',
    idade: 29,
    peso: 47
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}