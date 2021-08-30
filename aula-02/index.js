
import {numeros,produtos} from './dados.js'
/* Array.prototype.meuForEach = function(fnCallback){
    const array = this
     for(let i=0; i<array.length; i++){
        fnCallback(array[i])
    }
} */

// for(let i=0; i<numeros.length; i++){
//   console.log(numeros[i])
// }


/* function percorrer(value){
    console.log(value)
}
numeros.forEach(percorrer)

numeros.forEach(function(valor){
    console.log(valor)
}) */

/* numeros.forEach(valor=>console.log(valor)) */

/* numeros.forEach(function(numero,indice){
    console.log(`Indice: ${indice}`,`Valor:${numero}`)
}) */

// Método MAP

/* let novoArray = numeros.map(function(numero){
   return 'A-'+numero  
})
console.log(numeros,novoArray) */

let descontoAplicado = produtos.map(function(produto){
   produto.preco_venda = 1
   return produto

})
console.log(descontoAplicado[2],produtos[2])



