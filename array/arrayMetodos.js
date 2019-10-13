const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // tira o ultimo item 
console.log(pilotos)

pilotos.push('Verstappen') // inseri na ultima posição
console.log(pilotos)

pilotos.shift() // remove o primeiro item do array
console.log(pilotos)

pilotos.unshift('Hammilton') // inseri no começo do array
console.log(pilotos)

// splice pode remover ou inserir um item

// inserir
pilotos.splice(2, 0, 'Massa', 'Senna')  
console.log(pilotos)

// remover
pilotos.splice(3, 1)  
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)