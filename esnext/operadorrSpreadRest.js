// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de funnção

const funcionario = { nome: 'Maria', salario: 12510.46 }
const clone = {ativo: true, ...funcionario }

console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']

console.log(grupoFinal)
