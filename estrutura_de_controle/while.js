function getInteiroAleatorio (min, max) {
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}   

let opcao = -1
let cont = 0
while (opcao != 0) {
    opcao = getInteiroAleatorio(0,10)
    console.log(`Opção escolhida foi ${opcao}.`)
    cont ++
}

console.log(`Foram o total de ${cont} voltas no While.`)
