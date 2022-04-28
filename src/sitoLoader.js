const { URL } = require("url");

class sitoLoader {
  constructor(page) {
    this.baseUrl = "https://es.wikipedia.org/wiki/Angular_(framework)#:~:text=Angular%20%28com%C3%BAnmente%20llamado%20Angular%202%2B%20o%20Angular%202%29,y%20mantener%20aplicaciones%20web%20de%20una%20sola%20p%C3%A1gina.";
    this.page = page;
  }

  getUrl() {
    return new URL(`${this.baseUrl}/wiki/${this.page}`);
  }
}

module.exports = sitoLoader;
