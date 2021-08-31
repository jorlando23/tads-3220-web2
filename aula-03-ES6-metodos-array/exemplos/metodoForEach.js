import {filmes} from './dados.js'
// PERCORRER ARRAY E EXIBIR OS DADOS NO CONSOLE

// Forma Tradicional com laço FOR
console.log("**** Lista de Filmes - For Loop ****")
 for (let i = 0; i < filmes.length; i++) {
     console.log(filmes[i])
 }
// Utilizando o método array.forEach
console.log("**** Lista de Filmes - array.ForEach ****")
filmes.forEach(function(filme){
    console.log(filme)
})
//filmes.forEach(filme=>{ console.log(filme)})
