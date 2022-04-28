const {readFileSync} = require('fs');

leggi = () =>{
const primoFile = readFileSync('./src/primoFile.txt', 'utf8');
const secondoFile = readFileSync('./src/secondoFile.txt', 'utf8');
return(`Questo è il contenuto del primo file "${primoFile}", e questo è il contenuto del secondo file "${secondoFile}".`);
}

module.exports=leggi();