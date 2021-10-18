import {estudantes} from './dados.js'

//ESTUDANTES MAIORES DE IDADE

//Forma Tradicional com For Loop
let estudantesMaiorIdade = []
for(let i = 0; i < estudantes.length; i++){
    if(estudantes[i].idade >= 18){
        estudantesMaiorIdade.push(estudantes[i])
    }
}
//console.log(estudantesMaiorIdade)
let estudantesFiltrados = estudantes.filter(function(estudante){
    return estudante.idade >=18
})
//estudantesFiltrados = estudantes.filter(estudante=>estudante.idade>=18)
console.log(estudantesFiltrados)


