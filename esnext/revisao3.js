// ES8: Object.values/Ebject.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhoruas na Notação Literal
const nome = 'Carla'
const pessoa ={
    nome,
    ola() {
        return 'Oi gente'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {
    falar() {
        return 'Au au!'
    }
}

class Cachorro  extends Animal{}

console.log(new Cachorro().falar())