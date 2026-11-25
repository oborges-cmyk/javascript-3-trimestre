// Importa o arquivo JSON e já o converter automaticamente para um Objeto em JavaScript
const dados = require("./dados.json");

// Exibe os dados do arquivo JSON no console
console.log(dados);

// Verifica o tipo do dado (retornará "object" porque o JSON foi convertido para um objeto JavaScript)
console.log(typeof dados);