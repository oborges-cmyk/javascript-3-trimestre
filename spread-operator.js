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

console.log(produto.preco) // 2499 - O objeto produto não foi alterado, apenas copiado para o objeto itemCarrinho

console.log(produto) // { nome: 'Notebook', preco: 2499, categoria: 'Periféricos' } - O objeto produto não foi alterado, apenas copiado para o objeto itemCarrinho