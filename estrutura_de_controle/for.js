let contador = 1

while (contador <= 10) {
    console.log(contador + "° Volta")
    contador++
}

for (let cont = 1; cont <= 10; cont++) {
    console.log(cont+'º Volta no FOR')
}

const notas = [2.5, 5.1, 5.2, 9.5, 4.2]

for (let i = 0; i < notas.length; i++) {
    console.log('Nota = ' + notas[i])
    
}