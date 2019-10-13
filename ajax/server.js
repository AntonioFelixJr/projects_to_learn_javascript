const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true} ))
app.use(bodyParser.json())

app.get('/parOuImpar', (req, res) => {

    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})


app.listen(8080, () => console.log('Executando..'))
