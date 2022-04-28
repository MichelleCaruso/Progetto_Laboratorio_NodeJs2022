var express = require('express');
var router = express.Router();
const sayHi = require('../src/primoModulo');
const data = require('../src/moduloData');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('data', { title: 'Progetto Node Js', utente: `${sayHi}`, 
  people: `Gli utenti sono: ${data}, `
});
});

module.exports = router;