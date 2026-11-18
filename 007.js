// Métodos de objetos

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

 const chaveDoObjeto = Object.keys(cliente);
 // extrai todos os nomes das chaves do objeto e retorna em um array
 console.log(chaveDoObjeto); // [ 'nome', 'idade', 'email', 'telefone', 'endereco' ]

 if (chaveDoObjeto.includes("endereco")) {
    console.error("Erro. É necessário ter um endereço cadastrado.");
 }