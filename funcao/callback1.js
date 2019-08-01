const fabricantes = ["Mercedes", "Audi", 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

console.log('\nFunção de Callback')
fabricantes.forEach(imprimir)
console.log('\nAnônima')
fabricantes.forEach(function(fabricante, index){
    console.log(`${index + 1}. ${fabricante}`)
})
console.log('\nArrow')
fabricantes.forEach((fabricante,index) => console.log(`${index + 1}. ${fabricante}`))