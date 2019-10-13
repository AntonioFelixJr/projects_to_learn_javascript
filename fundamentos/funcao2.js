// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b){
    console.log( a + b )
} 

imprimirSoma(10, 22)

// Armazenando uma funcao arrow em uma variavel

let soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

// retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(10,11))

const imprimir2 = a => console.log(a)

imprimir2('Olá Javascript')