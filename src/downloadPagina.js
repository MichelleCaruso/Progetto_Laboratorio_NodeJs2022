const axios = require("axios"); 

module.exports = (url, callback) => 
axios
.get(url)
.then(response => (response.data))
.catch(error => console.error(error));