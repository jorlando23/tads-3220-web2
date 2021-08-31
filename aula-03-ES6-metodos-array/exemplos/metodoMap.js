import {numeros} from './dados.js'
//CRIAR UM NOVO ARRAY de NUMEROS COM OS NUMEROS DOBRADOS

// Método tradicional utilizando o For loop
let numerosDobrados = []
 for (let i = 0; i < numeros.length; i++) {
    numerosDobrados.push(numeros[i] * 2)
} 
console.log("****Numeros Dobrados com For Loop**** ",numerosDobrados)
numerosDobrados = numeros.map(function(numero){
    return numero * 2
})
//numerosDobrados = numeros.map(numero=>numero * 2)
console.log(numerosDobrados,numeros)