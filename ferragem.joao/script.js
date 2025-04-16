// Preços dos produtos
let precos = {
  martelo: 49.00,
  pregos: 8.00,
  parafusos: 6.00
};

function mostrarPreco() {
  const produto = document.getElementById('produto').value;
  const precoDiv = document.getElementById('precoProduto');
  
  // Verificar se um produto foi selecionado
  if (produto) {
      precoDiv.innerHTML = `Preço: R$${precos[produto].toFixed(2)}`;
  } else {
      precoDiv.innerHTML = '';
  }
}

function calcular() {
  const produto = document.getElementById('produto').value;
  const quantidade = document.getElementById('quantidade').value;
  
  // Verificar se o produto e a quantidade estão selecionados
  if (!produto || quantidade <= 0) {
      alert("Por favor, selecione um produto e uma quantidade válida.");
      return;
  }

  // Calcular o preço total
  const precoTotal = precos[produto] * quantidade;

  // Exibir o resultado
  document.getElementById('resultado').innerHTML = `
      <p>Total: R$${precoTotal.toFixed(2)}</p>
  `;
}
