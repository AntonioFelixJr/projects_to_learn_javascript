let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)
comparaComThis(this)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)


console.log('\nArrow')
let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

console.log('\nArrow Bind')
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

