const proffys = [
    { 
        name:"Carlos Alexandre", 
        avatar: "https://avatars1.githubusercontent.com/u/52242005?s=460&u=9a1a6659173ebb76e8a4b9a4d64164ddefb17e85&v=4", 
        whatsapp: 47992107826, 
        bio: "Entusiasta das melhores tecnologias.<br><br>Apaixonado por explodir coisas", 
        subject: "Quimica", 
        cost: "80", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    },

    { 
        name:"Henrique Silva", 
        avatar: "https://avatars0.githubusercontent.com/u/39440032?s=460&u=8a02e6b17a45ca9bdbfbe70bf91e0ad9404421ac&v=4", 
        whatsapp: 47992107826, 
        bio: "Entusiasta das melhores tecnologias.<br><br>Apaixonado por explodir coisas", 
        subject: "Quimica", 
        cost: "80", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    }

]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",

]
//Funcionalidades

function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
     const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays }) 
}

function pageGiveClasses(req, res) {
    const data = req.query

    //se tiver data
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty){

        data.subject = getSubject(data.subject)

         //adicionar data a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }
    // se não mostrar a página
    return res.render("give-classes.html", { subjects, weekdays }) 
}

//Servidor
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')


//configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
// configurar arquivos estátivos (css, scripts, imagens)
.use(express.static("public"))
//rotas das aplicações
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)

