import express from 'express'
import {cursos} from'./cursos.js'

const app = express()

app.get('/',function(request,response){
    response.send("Página Inicial")
})
app.get('/cursos',function(request,response){
    response.json(cursos)
})
/* /cursos/navirai */

app.listen(3000,function(){
    console.log("Server is running port 3000")
})
