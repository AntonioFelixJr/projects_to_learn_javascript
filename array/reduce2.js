const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

// Desafio 1: Todos os alunos são bolsista?
console.log('Desafio 1: Todos os alunos são bolsista?')

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))



const todosAlunosBolsista = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    console.log(`Acumulador: ${acumulador} | Atual: ${atual}`)
    return acumulador === false ? false : atual
})

console.log(todosAlunosBolsista)



// Desafio 2: Algum aluno é bolsista?
console.log('\nDesafio 2: Algum aluno é bolsista?')

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))


const algumAlunosBolsista = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    return acumulador === true ? true : atual
})

console.log(algumAlunosBolsista)

