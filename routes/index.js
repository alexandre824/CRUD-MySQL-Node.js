var express = require('express')
var app = express()

app.get('/', function(req, res) {
	//Redirecionamento para a pagina princial
	res.render('index', {title: 'Atendimento contra a violência homofóbica'})
})


module.exports = app;
