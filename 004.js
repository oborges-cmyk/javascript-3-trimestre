const cliente = {
    nome:"Paola", 
    idade:32, 
    cpf:"123.456.789-00",
    email: 'paola.rodrigues1201@gmail.com'
 }
 
console.log (`o nome do cliente é ${clientes.nome}`); //O nome do cliente é Paola

console.log (`os 3 primeiros dígitos do cpf são ${String(clientes.cpf).slice(0,3)}`); //os 3 primeiros dígitos do cpf são 123

const chaves = [nome, idade, cpf, email]