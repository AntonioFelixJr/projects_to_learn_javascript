const moduloA = require('../../moduloA')

console.log(moduloA.ateLogo+"1")

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
        res.write('Bom DIA!!!')
        res.end()
}).listen(8080)

