// Percorrendo Objetos

const clientes = {
    nome: 'Luiz',
    idade: 30,
    cpf: "12345678900",
    email: "luiz@email.com",
    telefone: ["12345678900", "9876543210"],
 };

 clientes.enderecos = [
    {
        rua: "Rua dos bobos",
        numero: 0,
        apartamento: true,
        complemento: "ap 934"
    },
 ];

 function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
 }

ligaParaCliente(...clientes.telefone); // Spread operator

const encomenda =
    {
        destinatario: clientes.nome,
        ...clientes.enderecos[0],
    };

console.log(encomenda); // { destinatario: 'Luiz', rua: 'Rua dos bobos', numero: 0, apartamento: true, complemento: 'ap 934' }