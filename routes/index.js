var express = require('express');
var router = express.Router();
const sayHi = require('../src/primoModulo');
const async = require("hbs/lib/async");

function nomeUser() { 
		const nome = 'Pippo Pluto';
		return nome;
}

function cittàUser() {
		const città = 'Torino';
		return città;
}

async function printData() {
	const nome = await nomeUser();
	const città = await cittàUser();
		return (`${nome} che arriva da ${città}`);

}

printData();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const user = await printData();
  res.render('index', { title: 'Progetto Node Js', utente: `${sayHi}`, user: `${user}`});
});

module.exports = router;

