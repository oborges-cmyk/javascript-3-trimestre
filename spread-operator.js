// Spread operator

const produto = {
    nome: "Notebook",
    preco: 2499,
    categoria: "Periféricos"
    };

const itemCarrinho = {
    ...produto, // Capta todas as propriedades do objeto produto
    quantidade: 3, // Adiciona uma nova propriedade ao objeto itemCarrinho
    preco: 3500, // Sobescreve a propriedade preco do objeto produto
};

console.log(itemCarrinho) // { Saída: nome: 'Notebook', preco: 3500, categoria: 'Periféricos', quantidade: 3 }

console.log(produto.preco) // Saída: 2499 (objeto produto permanece inalterado)

console.log(produto) // Saída: 3500 (o objeto itemCarrinho tem o preço atualizado)