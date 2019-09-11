// não aceitarepetição e não é indexado

const times = new Set()
times.add('Vasco')
times.add('Corinthians').add('São Paulo').add('Palmeiras')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Flamengo'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Vitória','Antônio', 'Vitória']
const nomeSet = new Set(nomes) // Set( ['Vitória','Antônio', 'Vitória'] )

console.log(nomeSet)