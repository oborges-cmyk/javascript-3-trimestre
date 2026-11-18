const cliente = {
    nome: 'Carlos',
    idade: 24,
    email: "carlos@example.com",
    telefone: ["1234567890", "0987654321"],
    endereco: [
        {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934"
        }
    ]
 }

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}