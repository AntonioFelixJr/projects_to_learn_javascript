console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){ return this.split('').reverse().join('')}
console.log('Antonio Felix'.reverse())

Array.prototype.first = function(){ return this[0]}
console.log([1, 2, 3, 4].first())
console.log(['z', 'a', 'b'].first())

String.prototype.toString = function(){ return 'Lascou tudo!'} // Não sobreescrever os métodos nativos 
console.log('Felix'.reverse())
