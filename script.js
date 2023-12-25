// script.js

// Adicione scripts JavaScript conforme necessário

document.getElementById('customerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar o envio padrão do formulário

    // Obter o valor do campo de nome do cliente
    var customerName = document.getElementById('customerName').value;

    // Adicionar lógica para processar os dados, por exemplo, exibindo no console
    console.log('Nome do Cliente:', customerName);

    // Limpar o campo do nome do cliente após o envio
    document.getElementById('customerName').value = '';
});
