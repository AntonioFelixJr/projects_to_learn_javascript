let dobro = function(a) {
    return 2 * a
}

console.log(dobro(Math.PI))

dobro = (a) => {
    return a * 2
}

console.log(dobro(Math.PI))

dobro = a => 2 * a // retorno implícito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

console.log(ola())

ola = () => 'Ola'

console.log(ola())