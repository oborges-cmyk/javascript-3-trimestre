const clientes = {
    nome:'paola',
    idade:32,
    cpf:12345678900,
    saldo:200,
    efetuarPagamento: function(valor){
        if(valor > this.saldo){
            console.log('Saldo insuficiente');
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Saldo atual: ${this.saldo}`);
            }
        }
    };

    const cliente = clientes;
    cliente.efetuarPagamento(50); // Pagamento efetuado. Saldo atual: 150