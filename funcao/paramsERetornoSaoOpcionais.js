function area(altura, largura) {
    const area = altura * largura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m²`)
    } else{
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(4,2,4,2,4))
console.log(area(null,undefined))
console.log(area(15,20))