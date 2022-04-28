var express = require('express');
var router = express.Router();
const fs = require("fs");
const path = require("path"); 
const process = require("process");
const downloadPagina = require("../src/downloadPagina");
const sitoLoader = require("../src/sitoLoader");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pagina', { title: 'Progetto Node Js'});
});

console.log(process.argv);

const loader = new sitoLoader("Angular");
const sitoUrl = loader.getUrl();

downloadPagina(sitoUrl.href).then(page => {
  
  fs.writeFileSync(path.join(".", "views", "pagina.hbs"), page);

});

module.exports = router;