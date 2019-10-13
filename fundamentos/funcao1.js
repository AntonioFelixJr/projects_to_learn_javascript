// Funcao sem retorno

function soma(a,b){
    imprimirSoma(a+b)
}

function imprimirSoma(x){
    console.log(x)
}

soma(4,1);
soma(4);
soma(2, 10, 2 ,3 ,4 ,5 ,6);
soma();

// Função com retorno

function adicao(a = 1,b = 2){
    return a + b
}
console.log(adicao(2, 5))
console.log(adicao(2))
console.log(adicao())