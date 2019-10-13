// Arrow Function
const soma = (a, b) => a + b

console.log(soma(5, 8))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametros default
function log(texto = 'Node') {
    console.log(texto)
}
log()
log('Sou mais forte')

// operador rest
function total(...numero) {
    let total =0
    numero.forEach(n => total += n)
    return total
}

console.log(total(1 ,2 ,3 ,12))
