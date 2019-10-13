// taddef mtemplates - preocessa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}
const pessoa = 'Antonio'
const sonho = 'Programador Sênior'

console.log(tag `${pessoa} quer se tornar ${sonho}`)