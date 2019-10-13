function getInteiroAleatorio (min, max) {
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}   

let opcao = 0
let cont = 0
do {
    opcao = getInteiroAleatorio(0,10)
    console.log(`Opção escolhida foi ${opcao}.`)
    cont ++
}while (opcao != 0)

console.log(`Foram o total de ${cont} voltas no While.`)
