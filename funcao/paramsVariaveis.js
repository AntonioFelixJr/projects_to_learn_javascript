function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }

    return soma
}

console.log(soma())
console.log(soma(2))
console.log(soma(2, 5, 6))
console.log(soma(2.2, 5.1, 6.4))

console.log(soma(2.2, 5.1, 2.4, "TESTE"))
console.log(soma('a', 'b', 'c', "TESTE"))