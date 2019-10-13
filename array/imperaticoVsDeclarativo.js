const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota 
}

const mediaAlunos = total1 / alunos.length

console.log('Total média: '+mediaAlunos)

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const media = (notas, total) => notas / total

const total2 = alunos.map(getNota).reduce(soma)
console.log(media(total2, alunos.length))
