class Lancamento {
    
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }

}

class CicloFinanceiro {
    
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return `Total de R$${valorConsolidado} mês ${this.mes} de ${this.ano}`
    }
}

const salario = new Lancamento('Salario', 1700)
const contasGeral = new Lancamento('Contas', -340)

const contas = new CicloFinanceiro(8, 2019)
contas.addLancamentos(salario, contasGeral)
console.log(contas.sumario())