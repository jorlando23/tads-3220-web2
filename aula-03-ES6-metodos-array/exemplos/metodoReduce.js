import {contasAPagar} from './dados.js'
//TOTAL DE CONTAS A PAGAR

// forma tradicional com For Loop
let total = 0
for (let i = 0; i < contasAPagar.length; i++) {
    total += contasAPagar[i].valor
}
//console.log(total)

let totalContas = contasAPagar.reduce(function(acumulador,conta){
    return acumulador + conta.valor
},0)
//totalContas = contasAPagar.reduce((acumulador,conta)=>acumulador+conta.valor)
console.log(totalContas)