// Objetos do Javascript
const listaCPFs = ['123.456.789-00', '987.654.321-00', '111.222.333-44'];

const informacoesPessoa = ['nome', 'João', 'idade', 32,'cpf','123.456.789-00'];

console.log(informacoesPessoa[1]); // João

//Acessando os dados dos clientes

const clientes = {
    nome:"Paola", 
    idade:32, 
    cpf:"123.456.789-00",
    email: 'paola.rodrigues1201@gmail.com'
 }

console.log (`o nome do cliente é ${clientes.nome}`); //O nome do cliente é Paola
console.log (`a idade do cliente é ${clientes.idade}`); //A idadde do cliente é 32
console.log (`o cpf do cliente é ${clientes.cpf}`); //O cpf do cliente é 123.456.789-00
console.log (`o email do cliente é ${clientes.email}`); //O email do cliente é paola.rodrigues1201@gmail.com
console.log (`o endereco do cliente é ${clientes.endereco}`); //O endereço do cliente é 123 Rua Exemplo, São Paulo, SP