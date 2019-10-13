const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
 

axios.get(url).then(response => {
    
    const funcionarios = response.data
    
    const getPais = funcionario => funcionario.pais == 'China'
    
    const getGenero = funcionario => funcionario.genero == 'F'

    const getMenorSalario = (f, fAtual) => f.salario < fAtual.salario ? f : fAtual

    console.log(funcionarios.filter(getPais).filter(getGenero).reduce(getMenorSalario))
})