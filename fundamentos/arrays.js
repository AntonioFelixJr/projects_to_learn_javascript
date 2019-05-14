const valores = [
    1,2.2,3,4.1,5,6.4,8.2
]

console.log(valores[0], valores[6])
console.log(valores[7])

valores[7] = 20

console.log(valores[7])
console.log(valores.length)

valores.push({id: 3}, true, null, 'Text')

console.log(valores)

console.log(valores.pop())
delete valores[0]

console.log(valores)

console.log(typeof valores)


