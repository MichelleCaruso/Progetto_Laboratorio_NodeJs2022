var express = require("express");
var router = express.Router();
const sayHi = require('../src/primoModulo')
const user = require('../src/secondoModulo');

const { readFile } = require('fs');

readFile('./src/primoFile.txt', (err, contents) => {
  console.log('primo file letto!');
})
readFile('./src/secondoFile.txt', (err, contents) => {
  console.log('secondo file letto!');
});

router.get('/', function(req, res, next) {
    res.render('files', { title: 'Progetto Node Js', utente: `${sayHi}`, text: `${user}`});
});
  
module.exports = router;