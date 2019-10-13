// par chave/valor

const saudacao = 'Opa' // Contexte léxico 1

function exec() {
    const saudacao = 'Falaaaa' // Contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares chave/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    endereco: {
        logradouro: 'Rua',
        numeros: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)